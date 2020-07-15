const { Readable } = require('stream');
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./dataHelperFunctions.js').addPadding;
const average = require('./dataHelperFunctions.js').average;
const hasResponse = require('./dataHelperFunctions.js').hasResponse;
const randomNumber = require('./dataHelperFunctions.js').randomNumber;
const randomDate = require('./dataHelperFunctions.js').randomDate;

// :::::Number Of Target Data:::::
// const targetDataNum = 15000; // For Testing
// const targetDataNum = 100000; //100K
// const targetDataNum = 1000000; //1M
// const targetDataNum = 8000000; //8M
// const targetDataNum = 15000000; //15M
// const targetDataNum = 150000000; //150M


// :::::CSV Generator:::::


// Create writable stream
const writableStream = fs.createWriteStream('./database/RDBMS/reviewsData.csv');

// Write columns
writableStream.write('id,reviewer_name,body,date,dp,response\n', 'utf8');

// Create a generator
function * generateReviews(targetDataNum) {
  for (var i = 1; i <= targetDataNum; i+=1) {
    const id = i;
    const reviewer_name = name.firstName();
    const body = lorem.paragraph(1);
    const date = randomDate(new Date(2014, 0, 1), new Date());
    const dp = randomNumber(1, 1000);
    let response = null;
    if (hasResponse()) {
      response = lorem.paragraph(1);
    };
    yield `${id},${reviewer_name},${body},${date},${dp},${response}\n`;
  };
}

// Create readable stream
const readableStream = Readable.from(generateReviews(targetDataNum), {encoding: 'utf8'});

// Pipe writeable stream to readable stream
readableStream.pipe(writableStream);
