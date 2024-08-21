#!/usr/bin/node
/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = Number(req.params.id);
  if (Number.isNaN(cartId)) {
    res.status(404).send('Not Found');
  } else {
    res.status(200).send(`Payment methods for cart ${req.params.id}`);
  }
});

app.listen(PORT, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
