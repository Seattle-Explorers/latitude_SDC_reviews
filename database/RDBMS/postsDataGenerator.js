const Stream = require('stream')
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./posts.js').addPadding;
const average = require('./posts.js').average;
const randomNumber = require('./posts.js').randomNumber;

// :::::Number Of Target Data:::::
// const targetDataNum = 100000; //100K
// const targetDataNum = 2000000; //2M
// const targetDataNum = 5000000; //5M
const targetDataNum = 10000000; //10M

// :::::CSV Generator:::::
// Create readable stream
const readableStream = new Stream.Readable({ // Readable
  // objectMode: true,
  read(size) {}
});

// Create writable stream
const generatePosts = fs.createWriteStream('./database/RDBMS/postsData.csv');

// Write columns
generatePosts.write('id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,reviewSize,userName,userDp,reviews_id\n', 'utf8');

// Pipe writeable stream to readable stream
readableStream.pipe(generatePosts);

// Push a number of data to the readable stream
for (var i = 1; i <= targetDataNum; i+=1) {
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
  const reviews_id = randomNumber(1, 150000000);
  const data = `${id},${paddedId},${locationAvg},${valueAvg},${accuracyAvg},${commAvg},${cleanAvg},${checkinAvg},${avg},${reviewSize},${userName},${userDp},${reviews_id}\n`;
  readableStream.push(data, 'utf8');
}






