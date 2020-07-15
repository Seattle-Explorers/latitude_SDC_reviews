const { name, lorem } = require('faker');
var fs = require('fs');

// ===== HELPER FUNCTIONS =====
const addPadding = (numString) => {
  if (numString.length > 8 || numString.length === 0) {
    throw new Error('The number should be between 1 and 10,000,000');
  }
  return numString.padStart(8, '0');
};

const average = (array) => array.reduce((a, b) => a + b) / array.length;
const hasResponse = () => (Math.floor(Math.random() * 2) === 0);
const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
const randomDate = (start, end) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
);

const generateListingIDs = (firstReviewID, reviewsSize) => {
  let reviews = [];
  for (let i = 1; i <= reviewsSize; i += 1) {
    reviews.push(`${firstReviewID + i}`).toString();
  }
  return reviews;
}

const averages = () => {
  const averageArr = [];
  const averagesNum = [];
  const averagesFloat = [];
  for (let count = 1; count <= 6; count += 1) {
    const randomInt = (randomNumber(10, 50) / 10);
    const randomFloat = Number.parseFloat(randomInt).toFixed(1);
    averagesNum.push(randomInt);
    averagesFloat.push(randomFloat);
  }
  averageArr.push(averagesNum, averagesFloat);
  return averageArr;
}


module.exports = {
  addPadding,
  average,
  hasResponse,
  randomNumber,
  randomDate,
  generateListingIDs,
  averages,
};





