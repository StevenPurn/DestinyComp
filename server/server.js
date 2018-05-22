const express = require('express');
const parser = require('body-parser');
const db = require('../database/db.js');
const path = require('path');

const app = express();

const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || '8080';

app.use(parser.text());
app.use(parser.json());
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(PORT, () => {
  console.log(path.join(__dirname, '/../dist'));
  console.log(`listening on port ${PORT}`);
});

app.get('/games/:gameid', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  res.send();
});

app.get('/games/:gameid/platforms', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  db.query(`select * from games_platforms_junction where game_id = ${gameid}`)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.get('/games/:gameid/comments', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  db.query(`select * from comments where game_id = ${gameid}`)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.get('/polls', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  db.query('select * from polls order by id limit 1')
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.get('/games/:gameid/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/html');
  db.query(`select * from images where game_id = ${gameid} order by id`)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
})
