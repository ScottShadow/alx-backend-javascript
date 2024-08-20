#!/usr/bin/node
class AppController {
  /**
   * @static
   * @param {import('http').IncomingMessage} req
   * @param {import('http').ServerResponse} res
   * @returns {Promise<void>}
   * @memberof AppController
   */
  static async getHomepage(req, res) {
    if (!res) {
      throw new Error('Response is null or undefined');
    }
    try {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello Holberton School!');
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }
}
