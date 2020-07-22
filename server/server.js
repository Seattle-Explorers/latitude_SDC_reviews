require('newrelic')

// const path = require('path');
// const express = require('express');
const app = require('./app');
require('../database/newDBs/index.js');
const PORT = process.env.PORT || 3002;

// const PUBLIC = path.resolve(__dirname, '..', 'client', 'public');

// app.use(express.static(PUBLIC));

// app.get('/api/reviews/:id', (req, res) => {
//   const sql = `SELECT * FROM reviews LEFT JOIN posts ON (reviews.listingid=posts.paddedid) WHERE paddedid='${req.params.id}'`;

//   client.query(sql)
//   .then(() => {
//     res.status(200).send();
//     console.log(result);
//   })
//   .catch((error) => {res.status(500).send()})
// });


app.listen(PORT, () => {
  console.log(`listening in port: ${PORT}`);
});

