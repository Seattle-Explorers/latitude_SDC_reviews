const { Client } = require('pg');
require('dotenv').config();

const host = process.env.DB || 'localhost';
const client = new Client({
  user: 'postgres',
  password: process.env.DB_PW,
  host: process.env.DB_HOST,
  database: 'sdc',
});

client.connect()
.then(() => console.log('Connected'))
.catch((err) => console.log('Connection Error', err));

client.query('SET search_path TO sdc;')

// client.query(`SELECT * FROM reviews LEFT JOIN posts ON (reviews.listingid = posts.paddedid) WHERE paddedid='09000200'`)

module.exports.client = client;