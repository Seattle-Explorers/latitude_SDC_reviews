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
// const targetListingDataNum = 5000000; //5M
const targetListingDataNum = 10000000; //10M


// :::::CSV Generator:::::


// Create writable stream
const writableStream = fs.createWriteStream('./database/newDBs/reviewsData.csv');

// Write columns
writableStream.write('reviewId,reviewerDp,reviewerName,reviewBody,reviewDate,reviewResponse,listingId\n', 'utf8');

// Create a generator
function * generateReviews(targetListingDataNum) {
  let index = 1;
  let newReviews = true;
  let reviewSize;
  let reviewCounter = 1;
  let currentListingID = 1;

  while (currentListingID <= targetListingDataNum) {
    const reviewId = index;
    const reviewerDp = randomNumber(1, 1000);
    const reviewerName = name.firstName();
    const reviewBody = lorem.paragraph(1);
    const reviewDate = randomDate(new Date(2014, 0, 1), new Date());
    const listingId = currentListingID.toString().padStart(8, '0');
    index += 1;
    let reviewResponse = null;
    if (hasResponse()) {
      reviewResponse = lorem.paragraph(1);
    };
    if (newReviews) {
      reviewSize = randomNumber(6, 10);
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

    if (currentListingID <= targetListingDataNum) {
      yield `${reviewId},${reviewerDp},${reviewerName},${reviewBody},${reviewDate},${reviewResponse},${listingId}\n`;
    }
  };
}

// Create readable stream
const readableStream = Readable.from(generateReviews(targetListingDataNum), {encoding: 'utf8'});

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
