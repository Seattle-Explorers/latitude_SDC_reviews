const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./dataHelperFunctions.js').addPadding;
const average = require('./dataHelperFunctions.js').average;
const randomNumber = require('./dataHelperFunctions.js').randomNumber;
const getReviewIDs = require('./dataHelperFunctions.js').generateReviews;

// :::::Number Of Target Data:::::
// const targetDataNum = 1000; // For testing
// const targetDataNum = 100000; //100K
// const targetDataNum = 1000000; //1M
// const targetDataNum = 5000000; //5M
const targetDataNum = 10000000; //10M

// :::::CSV Generator:::::

// Create writable stream
const writableStream = fs.createWriteStream('./database/RDBMS/postsData.csv');

// Write columns
writableStream.write('id,paddedId,locationAvg,valueAvg,accuracyAvg,commAvg,cleanAvg,checkinAvg,avg,reviewSize,userName,userDp,reviews_id\n', 'utf8');

// Create reviews generator
function * generateReviews(targetDataNum) {
  for (let i = 1; i <= targetDataNum; i += 1) {
    const averagesNum = [];
    const averagesFloat = [];
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
    const reviewSize = randomNumber(10, 25);
    const userName = name.firstName();
    const userDp = randomNumber(1, 1000);
    const reviews_id = getReviewIDs(reviewSize).join();
    yield `${id},${paddedId},${locationAvg},${valueAvg},${accuracyAvg},${commAvg},${cleanAvg},${checkinAvg},${avg},${reviewSize},${userName},${userDp},${reviews_id}\n`;
  }
};

// Create readable stream
const readableStream = Readable.from(generateReviews(targetDataNum), {encoding: 'utf8'});

// Pipe data into writable stream
readableStream.pipe(writableStream);
