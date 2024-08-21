#!/usr/bin/node
/* eslint-disable no-unused-expressions */
const {
  describe, it, beforeEach, afterEach,
} = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  let response;
  beforeEach(() => {
    response = {
      data: 'Successful response from the API',
    };
  });
  afterEach(() => {
    response = null;
  });
  it('checking with True', (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.have.property('data');
      expect(data.data).to.equal(response.data);
      done();
    })
      .catch(done);
  });
  it.skip('checking with False', (done) => {
    getPaymentTokenFromAPI(false).then(() => {
      done();
    })
      .catch((err) => {
        expect(err).to.be.an('error');
        expect(err.message).to.equal('API call failed');
        done();
      });
  });
});
