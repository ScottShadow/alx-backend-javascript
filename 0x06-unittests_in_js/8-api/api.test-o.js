#!/usr/bin/node
const {
  describe, it,
  after,
} = require('mocha');
const { expect } = require('chai');
const request = require('request');
const app = require('./api-o');

const PORT = 7865;
const server = app.listen(PORT);

describe('getPaymentTokenFromAPI', () => {
  after(() => {
    server.close();
  });
  it('GET /', (done) => {
    // eslint-disable-next-line consistent-return
    request.get(`http://localhost:${PORT}/`, (err, res, body) => {
      if (err) return done(err);

      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
