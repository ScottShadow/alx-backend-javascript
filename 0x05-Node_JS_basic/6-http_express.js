#!/usr/bin/node
/**
 * Creates an Express server that listens on port 1245
 * and responds to GET requests on the root path with
 * "Hello Holberton School!".
 *
 * @module 6-http_express
 */
const express = require('express');

const app = express();
const port = 1245;

/**
 * GET /
 * Responds with "Hello Holberton School!".
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Starts the Express server listening on the specified port.
 */
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
