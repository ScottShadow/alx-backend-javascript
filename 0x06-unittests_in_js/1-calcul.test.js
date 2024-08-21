#!/usr/bin/node
const assert = require('assert');
const { it, describe } = require('mocha');

const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two positive numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 2, 3), 5);
  });

  it('should return the sum of two negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -2, -3), -5);
  });

  it('should return the sum of two decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 2.5, 3.7), 7);
  });

  it('should return the difference of two positive numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
  });

  it('should return the difference of two negative numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -5, -3), -2);
  });

  it('should return the difference of two decimal numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.7), 2);
  });

  it('should return the quotient of two positive numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
  });

  it('should return the quotient of two negative numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -10, -2), 5);
  });

  it('should return the quotient of two decimal numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 11.5, 2.5), 4);
  });

  it('should return an error for division by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
  });

  it('should return an error for invalid operation type', () => {
    assert.strictEqual(calculateNumber('INVALID', 10, 2), 0);
  });
});
