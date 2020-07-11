const { error } = require('console');
const express = require('express');

const Reviews = require('../database/schema.js');

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
  Reviews.findOne({ paddedId: req.params.id })
    .then((listing) => {
      if (listing) {
        res.status(200).send(listing);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      res.sendStatus(500);
      error(err);
    });
});

// const fs = require('fs')
// const request = require('request')
// const path = require('path');

// const filePath = path.resolve(__dirname, 'images');

// const download = (url, path, callback) => {
//   request.head(url, (err, res, body) => {
//     request(url)
//           .on('error', error => {
//         console.log('Error: ', error);
//         })
//       .pipe(fs.createWriteStream(path))

//       .on('close', callback);
//   })
// }

// for (i = 1; i <= 1000; i++) {
//   let url = `https://picsum.photos/200/300?random=${i}`;
//   let pathTo = `${filePath}/pug${i}.jpeg`;
//   download(url, pathTo, () => {
//     console.log('✅ Done!')
//   })
// }



module.exports = app;
