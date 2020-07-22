const { Client } = require('pg');

const host = process.env.DB || 'localhost';
const client = new Client({
  user: 'postgres',
  password: 'puglife',
  host,
  database: 'sdc',
});

client.connect()
.then(() => console.log('Connected'))
.catch((err) => console.log('Connection Error', err));

client.query('SET search_path TO sdc;')

// client.query(`SELECT * FROM reviews LEFT JOIN posts ON (reviews.listingid = posts.paddedid) WHERE paddedid='09000200'`)

module.exports.client = client;