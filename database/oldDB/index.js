const Promise = require('bluebird');

const mongoose = require('mongoose');

Promise.promisifyAll(mongoose);

const db = mongoose.connect('mongodb://localhost/fecReviews', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports.db = db;
