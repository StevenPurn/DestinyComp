const { Pool, Client } = require('pg');

const HOST = process.env.POSTGRES_HOST || '127.0.0.1';
const PORT = process.env.POSTGRES_PORT || 5432;
const DATABASE = process.env.POSTGRES_DB || 'games';
const USER = process.env.POSTGRES_USER || 'postgres';
const PASSWORD = process.env.POSTGRES_PW || 'postgres';

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port: PORT,
});

const client = new Client({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port: PORT,
});

client.connect();

const insertIntoDatabase = (query, values) => pool.query(query, values);

const queryDatabase = query => pool.query(query);

module.exports.query = queryDatabase;
module.exports.insert = insertIntoDatabase;
