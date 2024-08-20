#!/usr/bin/node
/**
 * This module exports an asynchronous function `getHomepage` that
 * sends a message to the client.
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
