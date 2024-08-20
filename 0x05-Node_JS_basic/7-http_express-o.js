#!/usr/bin/node
const express = require('express');
const app = express();
const port = 1245

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}


app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
})

app.get('/students', async (req, res) => {
  app.use(() => {
    try {
      req.myoutput = countStudents(process.argv[2].toString());
    } catch (e) {
      res.statusCode = 404;
      res.end('Cannot load the database');
    }
    next();
  })

  await req.myoutput;
  res.send(req.myoutput);
})

app.listen(port, () => { })

module.exports = app
