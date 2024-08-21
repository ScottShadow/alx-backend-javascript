#!/usr/bin/node
const {
  describe, it,
  after,
} = require('mocha');
const { expect } = require('chai');
const request = require('request');
const app = require('./api');

const PORT = 7865;
const server = app.listen(PORT);

describe('getPaymentTokenFromAPI', () => {
  after(() => {
    server.close();
  });
  it('GET /', (done) => {
    request.get(`http://localhost:${PORT}/`, (err, res, body) => {
      if (err) return done(err);

      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      return done();
    });
  });
  it('GET /cart/:id', (done) => {
    request.get(`http://localhost:${PORT}/cart/1`, (err, res, body) => {
      if (err) return done();

      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1');
      return done();
    });
  });
  it('GET /cart/NAN', (done) => {
    request.get(`http://localhost:${PORT}/cart/hello`, (err, res, body) => {
      if (err) return done();

      expect(res.statusCode).to.equal(404);
      expect(body).to.contain('Not Found');
      return done();
    });
  });
});
