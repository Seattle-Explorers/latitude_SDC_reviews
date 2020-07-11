const Stream = require('stream')
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./posts.js').addPadding;
const average = require('./posts.js').average;
const hasResponse = require('./posts.js').hasResponse;
const randomNumber = require('./posts.js').randomNumber;
const randomDate = require('./posts.js').randomDate;

// :::::CSV Generator:::::
const readableStream = new Stream.Readable({
  // objectMode: true,
  read(size) {}
});

const generateReviews = fs.createWriteStream('./database/RDBMS/reviewsData.csv');
// Create Columns
generateReviews.write('id, reviewer_name, body, date, dp, response\n', 'utf8');
// Pipe writeable stream to readable stream
readableStream.pipe(generateReviews);
function writeHundredFiftyMillion(writer, encoding, cb) {
  let i = 0;
  function write() {
    let ok = true;
    do {
      i += 1;
      const id = i;
      const reviewer_name = name.firstName();
      const body = lorem.paragraph(1);
      const date = randomDate(new Date(2014, 0, 1), new Date());
      const dp = randomNumber(1, 1000);
      let response = null;
      if (hasResponse()) {
        response = lorem.paragraph(1);
      }

      const data = `${id}, ${reviewer_name}, ${body}, ${date}, ${dp}, ${response}\n`;
      if (i === 0) {
        readableStream.push(data, encoding, cb);
      } else {
        ok = readableStream.push(data, encoding);
      }
    } while (i > 0 && i < 150000000 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
writeHundredFiftyMillion(generateReviews, 'utf-8', () => {
  generateReviews.end();
});
