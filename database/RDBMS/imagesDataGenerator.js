const Stream = require('stream')
const fs = require('fs');
const { name, lorem } = require('faker');
const addPadding = require('./dataHelperFunctions.js').addPadding;
const average = require('./dataHelperFunctions.js').average;
const hasResponse = require('./dataHelperFunctions.js').hasResponse;
const randomNumber = require('./dataHelperFunctions.js').randomNumber;
const randomDate = require('./dataHelperFunctions.js').randomDate;

// :::::Number Of Target Data:::::
const targetDataNum = 1000;

// :::::CSV Generator:::::
// Create readable stream
const readableStream = new Stream.Readable({
  // objectMode: true,
  read(size) {}
});

// Create writable stream
const generateImages = fs.createWriteStream('./database/RDBMS/imagesData.csv');

// Write columns
generateImages.write('id,imageIndex,imageUrl\n', 'utf8');



// Push a number of data to the readable stream
for (var i = 1; i <= targetDataNum; i+=1) {
  const id = i;
  const imageUrl = `https://will-sdc-profile-pics.s3-us-west-2.amazonaws.com/pug${id}.jpeg`;

  const data = `${id},${imageUrl}\n`;
  readableStream.push(data, 'utf8');
}

// Pipe writeable stream to readable stream
readableStream.pipe(generateImages);








