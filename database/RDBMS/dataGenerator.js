const Stream = require('stream')
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./posts.js').addPadding;
const average = require('./posts.js').average;
const hasResponse = require('./posts.js').hasResponse;
const randomNumber = require('./posts.js').randomNumber;
const randomDate = require('./posts.js').randomDate;

// const readableStream = new Stream.Readable({
//   // objectMode: true,
//   read(size) {}
// });
// const file = fs.createWriteStream('./database/RDBMS/example.csv');
// // fs.createWriteStream('./database/RDBMS/example.csv');
// file.write('hello');

// readableStream.pipe(file);

// for (let i = 0; i < 10000000; i++) {
//   readableStream.push(`hello${i}\n`)
// }





const readableStream = new Stream.Readable({
  // objectMode: true,
  read(size) {}
});

const generatePosts = fs.createWriteStream('./database/RDBMS/postsData.csv');
// Create Columns
generatePosts.write('id, paddedId, locationAvg, valueAvg, accuracyAvg, commAvg, cleanAvg, checkinAvg, avg, reviewSize, userName, reviews_id, userDp, \n', 'utf8');

readableStream.pipe(generatePosts);

function writeTenMillion(writer, encoding, cb) {
  let i = 1;

  function write() {
    let ok = true;

    do {
      const averagesNum = [];
      const averagesFloat = [];
      const reviews_id = [];
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
      // const reviews_id =



      const data = `${id}, ${paddedId}, ${locationAvg}, ${valueAvg}, ${accuracyAvg}, ${commAvg}, ${cleanAvg}, ${checkinAvg}, ${avg}, ${reviewSize}, ${userName}, ${userDp}\n`;

      if (i === 0) {
        readableStream.push(data, encoding, cb);
      } else {
        ok = readableStream.push(data, encoding);
      }
    } while (i > 0 && i < 100 && ok);

    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillion(generatePosts, 'utf-8', () => {
  generatePosts.end();
});


