require('newrelic')
const express = require('express');
const { client } = require('../database/newDBs/index.js');
const app = express();

// app.post('/api/reviews/:id', (req, res) => {
//   Reviews.updateOne({ paddedId: req.params.id }
//     , {$set:{}})
//     .then((listing) => {
//       if (listing) {
//         res.status(200).send(listing);
//       } else {
//         res.sendStatus(404);
//       }
//     })
//     .catch((err) => {
//       res.sendStatus(500);
//       error(err);
//     });
// });

app.get('/api/reviews/:id', (req, res) => {
  const sql =
  `SELECT * FROM reviews
  LEFT JOIN posts
  ON (reviews.listingid = posts.paddedid)
  WHERE paddedid = $1`;

  // const sql = `SHOW search_path;`

  const values = [req.params.id];
  // console.log(values);

  client.query(sql, values)
  .then((result) => {
    // const data = JSON.stringify(result.rows);
    // res.status(200).send(result.rows);
    res.status(200).send();
    console.log(result.rows);
  })
  .catch((error) => {
    // res.status(500).send();
    console.log(error.stack);
  })
});

module.exports = app;
