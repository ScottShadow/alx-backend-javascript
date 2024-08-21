#!/usr/bin/node
/* eslint-disable no-unused-expressions */
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToAPI Hooks', () => {
  let checkSoy;

  beforeEach(() => {
    checkSoy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    checkSoy.restore();
  });
  it('checking if numbers with spies', () => {
    sendPaymentRequestToApi(100, 20);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('The total is: 120')).to.be.true;
  });

  it('checking if numbers with spies 2', () => {
    sendPaymentRequestToApi(10, 10);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('The total is: 20')).to.be.true;
  });
});
