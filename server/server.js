const express = require('express');
const parser = require('body-parser');
const db = require('../database/db.js');
const path = require('path');

const app = express();

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '1337';

app.use(parser.text());
app.use(parser.json());
app.use(express.static(path.join(__dirname, '/dist/')));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get('/game/:gameid', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  res.send();
});

app.get('/gamedetails/:gameid', (req, res) => {
  const query = `SELECT products.id, colors.name AS color, products.description, products.material, ratings.rating AS reviewScore, ratings.rating_count AS reviewcount, names.name AS product_name, products.price, products.sku
    FROM products 
    JOIN colors ON products.color_id = colors.id
    JOIN names ON products.name_id = names.id
    JOIN ratings ON products.id = ratings.product_id
    WHERE products.id = ${req.params.gameid}`;
  db.query(query, (err, data) => {
    if (err) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end();
    } else {
      const stringData = JSON.stringify(data.rows[0]);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.send(stringData);
    }
  });
});
