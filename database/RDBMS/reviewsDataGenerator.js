const Stream = require('stream')
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./posts.js').addPadding;
const average = require('./posts.js').average;
const hasResponse = require('./posts.js').hasResponse;
const randomNumber = require('./posts.js').randomNumber;
const randomDate = require('./posts.js').randomDate;

// :::::Number Of Target Data:::::
const targetDataNum = 100000; //100K
const targetDataNum = 150000000; //150M
const targetDataNum = 150000000; //150M

// const targetDataNum = 150000000; //150M

// :::::CSV Generator:::::
// Create readable stream
const readableStream = new Stream.Readable({
  // objectMode: true,
  read(size) {}
});

// Create writable stream
const generateReviews = fs.createWriteStream('./database/RDBMS/reviewsData.csv');

// Write columns
generateReviews.write('id,reviewer_name,body,date,dp,response\n', 'utf8');

// Pipe writeable stream to readable stream
readableStream.pipe(generateReviews);

// Push a number of data to the readable stream
for (var i = 1; i <= targetDataNum; i+=1) {
  const reviewer_name = name.firstName();
  const body = lorem.paragraph(1);
  const date = randomDate(new Date(2014, 0, 1), new Date());
  const dp = randomNumber(1, 1000);
  let response = null;
  if (hasResponse()) {
    response = lorem.paragraph(1);
  }
  const data = `${id},${reviewer_name},${body},${date},${dp},${response}\n`;readableStream.push(data, 'utf8');
}










