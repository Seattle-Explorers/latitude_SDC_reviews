// require('newrelic');
const path = require('path');
const express = require('express');
const app = require('./app');
const bodyParser = require('body-parser');
require('../database/newDBs/index.js');

const PORT = process.env.PORT || 3002;

const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

app.use('/:id', express.static(PUBLIC));

app.get('/:id/reviews/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'public', 'bundle.js'));
});

app.listen(PORT, () => {
  console.log(`listening in port: ${PORT}`);
});