#!/usr/bin/node
const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  process.stdout.write(`API available on localhost port ${PORT}\n`);
});
module.exports = app;
