const Stream = require('stream')
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./posts.js').addPadding;
const average = require('./posts.js').average;
const randomNumber = require('./posts.js').randomNumber;

// :::::Number Of Target Data:::::
const targetDataNum = 10000000;

// :::::CSV Generator:::::
const readableStream = new Stream.Readable({ // Readable
  // objectMode: true,
  read(size) {}
});

const generatePosts = fs.createWriteStream('./database/RDBMS/postsData.csv'); // Writable
// Create Columns
generatePosts.write('id, paddedId, locationAvg, valueAvg, accuracyAvg, commAvg, cleanAvg, checkinAvg, avg, reviewSize, userName, userDp, reviews_id\n', 'utf8');
// Pipe writeable stream to readable stream
readableStream.pipe(generatePosts);
function writeTenMillion(writer, encoding, cb) {
  let i = 0;
  function write() {
    let ok = true;
    do {
      const averagesNum = [];
      const averagesFloat = [];
      // const reviews_id = [];
      for (let count = 1; count <= 6; count += 1) {
        const randomInt = (randomNumber(10, 50) / 10);
        const randomFloat = Number.parseFloat(randomInt).toFixed(1);

        averagesNum.push(randomInt);
        averagesFloat.push(randomFloat);
      }
      const [ cleanAverage, commAverage, accuracyAverage, valueAverage, locationAverage, checkinAverage ] = averagesFloat;
      i += 1;
      const id = i;
      const paddedId = i.toString().padStart(8, '0');
      const locationAvg = locationAverage;
      const valueAvg = valueAverage;
      const accuracyAvg = accuracyAverage;
      const commAvg = commAverage;
      const cleanAvg = cleanAverage;
      const checkinAvg = checkinAverage;
      const avg = average(averagesNum).toFixed(2);
      const reviewSize = randomNumber(6, 10);
      const userName = name.firstName();
      const userDp = randomNumber(1, 1000);
      const reviews_id = randomNumber(1, 150000000); // This needs to be an array, consult with Josh or Patrick
      // A single data string looks like this

      // This is what a single data looks like:
      const data = `${id}, ${paddedId}, ${locationAvg}, ${valueAvg}, ${accuracyAvg}, ${commAvg}, ${cleanAvg}, ${checkinAvg}, ${avg}, ${reviewSize}, ${userName}, ${userDp}, ${reviews_id}\n`;
      if (i === targetDataNum) {
        readableStream.push(data, encoding, cb);
      } else {
        ok = readableStream.push(data, encoding);
      }
    } while (i > 0 && i < targetDataNum && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}
writeTenMillion(generatePosts, 'utf-8', () => {
  generatePosts.end();
});
