const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./dataHelperFunctions.js').addPadding;
const average = require('./dataHelperFunctions.js').average;
const hasResponse = require('./dataHelperFunctions.js').hasResponse;
const randomNumber = require('./dataHelperFunctions.js').randomNumber;
const randomDate = require('./dataHelperFunctions.js').randomDate;
const generateListingIDs = require('./dataHelperFunctions.js').generateListingIDs;

// :::::Number Of Target Data:::::
// const targetListingDataNum = 1000; // For insertion testing
// const targetListingDataNum = 100000; //100K
// const targetListingDataNum = 1000000; //1M
// const targetListingDataNum = 8000000; //8M
// const targetListingDataNum = 15000000; //15M
const targetListingDataNum = 150000000; //150M


// :::::CSV Generator:::::


// Create writable stream
const writableStream = fs.createWriteStream('./database/RDBMS/reviewsData.csv');

// Write columns
writableStream.write('id,reviewer_name,body,date,dp,response,listingId\n', 'utf8');

// Create a generator
function * generateReviews(targetListingDataNum) {
  let index = 1;
  let newReviews = true;
  let reviewSize;
  let reviewCounter = 1;
  let currentListingID = 1;

  while (currentListingID <= targetListingDataNum) {
    const id = index;
    const reviewer_name = name.firstName();
    const body = lorem.paragraph(1);
    const date = randomDate(new Date(2014, 0, 1), new Date());
    const dp = randomNumber(1, 1000);
    const listingId = currentListingID.toString().padStart(8, '0');
    index += 1;
    let response = null;
    if (hasResponse()) {
      response = lorem.paragraph(1);
    };
    if (newReviews) {
      reviewSize = randomNumber(10, 25);
    }
    if (reviewCounter < reviewSize) {
      reviewCounter += 1;
      newReviews = false;
    }
    if (reviewCounter === reviewSize) {
      currentListingID += 1;
      reviewCounter = 1;
      newReviews = true;
    }

    if (currentListingID <= 1000) {
      yield `${id},${reviewer_name},${body},${date},${dp},${response},${listingId}\n`;
    }
  };
}

// Create readable stream
const readableStream = Readable.from(generateReviews(targetListingDataNum), {encoding: 'utf8'});

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
