const mongoose = require('mongoose');

require('./index.js');

const reviewSchema = new mongoose.Schema({
  paddedId: String,
  userDp: String,
  userName: String,
  avg: String,
  reviewSize: Number,
  cleanAvg: String,
  commAvg: String,
  accuracyAvg: String,
  valueAvg: String,
  checkinAvg: String,
  locationAvg: String,
  reviews: Array,
});

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
