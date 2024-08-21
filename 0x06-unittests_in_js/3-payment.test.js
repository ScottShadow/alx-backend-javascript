#!/usr/bin/node
/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('calculateNumber with spies', () => {
  it('checking if numbers with spies', () => {
    const checkSoy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 3);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('SUM', 1, 3)).to.be.true;
    checkSoy.restore();
  });

  it('checking if numbers round with spies', () => {
    const checkSoy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(1, 3.7);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('SUM', 1, 3.7)).to.be.true;
    checkSoy.restore();
  });
});
