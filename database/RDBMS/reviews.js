// const { name, lorem } = require('faker');
// var fs = require('fs');


// // HELPER FUNC
// const addPadding = (numString) => {
//   if (numString.length > 8 || numString.length === 0) {
//     throw new Error('The number should be between 1 and 10,000,000');
//   }
//   return numString.padStart(8, '0');
// };

// const average = (array) => array.reduce((a, b) => a + b) / array.length;

// const hasResponse = () => (Math.floor(Math.random() * 2) === 0);

// const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

// const randomDate = (start, end) => (
//   new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
// );




// const generateReviews = (size) => {
//   const reviews = [];
//   for (let count = 1; count <= size; count += 1) {
//     const reviewObj = {};

//     reviewObj.reviewer_name = name.firstName();
//     reviewObj.dp = randomNumber(1, 1000).toString();
//     reviewObj.body = lorem.paragraph(1);
//     reviewObj.date = randomDate(new Date(2014, 0, 1), new Date());
//     if (hasResponse()) {
//       reviewObj.respond = lorem.paragraph(1);
//     }

//     reviews.push(reviewObj);
//   }
//   return reviews.sort((a, b) => (a.date < b.date));
// };

// module.exports = generateReviews;