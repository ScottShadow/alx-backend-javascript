#!/usr/bin/node
const { it, describe } = require('mocha');
const { expect } = require('chai');

const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with chai', () => {
  it('should return the sum of two positive numbers', () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });

  it('should return the sum of two negative numbers', () => {
    expect(calculateNumber('SUM', -2, -3)).to.equal(-5);
  });

  it('should return the sum of two decimal numbers', () => {
    expect(calculateNumber('SUM', 2.5, 3.7)).to.equal(7);
  });

  it('should return the difference of two positive numbers', () => {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
  });

  it('should return the difference of two negative numbers', () => {
    expect(calculateNumber('SUBTRACT', -5, -3)).to.equal(-2);
  });

  it('should return the difference of two decimal numbers', () => {
    expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
  });

  it('should return the quotient of two positive numbers', () => {
    expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
  });

  it('should return the quotient of two negative numbers', () => {
    expect(calculateNumber('DIVIDE', -10, -2)).to.equal(5);
  });

  it('should return the quotient of two decimal numbers', () => {
    expect(calculateNumber('DIVIDE', 11.5, 2.5)).to.equal(4);
  });

  it('should return an error for division by zero', () => {
    expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
  });

  it('should return an error for invalid operation type', () => {
    expect(calculateNumber('INVALID', 10, 2)).to.equal(0);
  });
});
