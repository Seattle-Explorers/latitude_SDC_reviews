// require('newrelic')
const express = require('express');
const { pool } = require('../database/newDBs/index.js');

const app = express();

app.get('/api/reviews/:id', (req, res) => {
  const sql =
  `SELECT * FROM reviews
  LEFT JOIN posts
  ON (reviews.listingid = posts.paddedid)
  WHERE paddedid = $1`;

  const values = [req.params.id];

  pool.query(sql, values)
  .then((result) => {
    res.status(200).send(result.rows);
    console.log(result.rows);
  })
  .catch((error) => {
    res.status(500).send();
    console.log(error.stack);
  })
});

module.exports = app;
