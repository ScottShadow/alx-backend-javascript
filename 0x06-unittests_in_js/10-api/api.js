#!/usr/bin/node
/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const cartId = Number(req.params.id);
  if (Number.isNaN(cartId) || cartId < 1) {
    res.status(404).send('Not Found');
  } else {
    res.status(200).send(`Payment methods for cart ${req.params.id}`);
  }
});
app.get('/available_payments', (req, res) => {
  const payload = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.status(200).send(payload);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  }
});
app.listen(PORT, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;
