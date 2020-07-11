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

const generateReviews = (size) => {
  const reviews = [];
  for (let count = 1; count <= size; count += 1) {
    const reviewObj = {};

    reviewObj.reviewer_name = name.firstName();
    reviewObj.dp = randomNumber(1, 1000).toString();
    reviewObj.body = lorem.paragraph(1);
    reviewObj.date = randomDate(new Date(2014, 0, 1), new Date());
    if (hasResponse()) {
      reviewObj.respond = lorem.paragraph(1);
    }

    reviews.push(reviewObj);
  }
  return reviews.sort((a, b) => (a.date < b.date));
};

// ====== ENTRY CREATION FUNCTION =====
const seedEntry = (seed) => {
  // ===== STORAGE SETUP =====
  const entry = {};
  const averagesNum = [];
  const averagesFloat = [];

  // ===== CHECKS =====
  if (typeof seed !== 'number') {
    throw new Error('The seed must be a number');
  }

  // ===== DUMMY DATA CREATION ======

  for (let count = 1; count <= 6; count += 1) {
    const randomInt = (randomNumber(10, 50) / 10);
    const randomFloat = Number.parseFloat(randomInt).toFixed(1);
    averagesNum.push(randomInt);
    averagesFloat.push(randomFloat);
  }

  const [cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg] = averagesFloat;
  entry.paddedId = addPadding(seed.toString());
  entry.userDp = randomNumber(1, 100).toString();
  entry.userName = name.firstName();
  entry.avg = average(averagesNum).toFixed(2);
  entry.reviewSize = randomNumber(6, 10);
  entry.cleanAvg = cleanAvg;
  entry.commAvg = commAvg;
  entry.accuracyAvg = accuracyAvg;
  entry.valueAvg = valueAvg;
  entry.locationAvg = locationAvg;
  entry.checkinAvg = checkinAvg;
  entry.reviews = generateReviews(entry.reviewSize);
  return entry;
};

module.exports = {
  addPadding,
  average,
  hasResponse,
  randomNumber,
  randomDate,
};





