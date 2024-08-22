#!/usr/bin/node
/* eslint-disable no-unused-expressions */
const { expect } = require('chai');
const {
  it, describe,
} = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi with stubs and spies', () => {
  let calculateNumberStud;
  let checkSoy;
  it('checking if numbers with spies and studs', () => {
    checkSoy = sinon.spy(console, 'log');
    calculateNumberStud = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('The total is: 10')).to.be.true;

    expect(calculateNumberStud.calledOnce).to.be.true;
    expect(calculateNumberStud.calledWith('SUM', 100, 20)).to.be.true;
    checkSoy.restore();
    calculateNumberStud.restore();
  });

  it('checking if numbers round with spies and stubs', () => {
    checkSoy = sinon.spy(console, 'log');
    calculateNumberStud = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(1.7, 300.9);
    expect(checkSoy.calledOnce).to.be.true;
    expect(checkSoy.calledWith('The total is: 10')).to.be.true;

    expect(calculateNumberStud.calledOnce).to.be.true;
    expect(calculateNumberStud.calledWith('SUM', 1.7, 300.9)).to.be.true;
    checkSoy.restore();
    calculateNumberStud.restore();
  });
});
