#!/usr/bin/node
/* eslint-disable no-console */
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi;
