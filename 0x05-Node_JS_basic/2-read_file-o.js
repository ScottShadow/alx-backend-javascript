#!/usr/bin/node

/**
 * This module exports an asynchronous function `countStudents` that
 * counts the number of students in a file.
 *
 * @module countStudents
 */

const { spawn } = require('node:child_process');

/**
 * Asynchronously counts the number of students in a file.
 *
 * @param {string} path - The path to the file containing the students.
 * @return {Promise<number>} A Promise that resolves to the number of students.
 */
async function countStudents(path) {
  // Spawn a child process to execute the 'cat' command.
  try {
    const cat = spawn('cat', [path]);
  } catch (error) {
    process.stdout.write("Cannot load the database");
    process.exit(1);
  }
  // Spawn a child process to execute the 'wc' command.
  const wc = spawn('wc', ['-l']);
  process.stdout.write(`Number of students: ${wc}\n`);

  // Pipe the output of 'cat' to the input of 'wc'.
  cat.stdout.pipe(wc.stdin);


  return new Promise((resolve, reject) => {
    // Listen for data events on the output of 'wc'.
    wc.stdout.on('data', (data) => {
      // Parse the data as a string, trim the whitespace, and convert to an integer.
      const count = parseInt(data.toString().trim());
      // Resolve the Promise with the count.
      resolve(count);
    });
  });
}

