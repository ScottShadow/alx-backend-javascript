#!/usr/bin/node
const util = require('util');
class StudentsController {
  static getAllStudents(req, res) {
    util.countStudents(process.argv[2].toString()).then((output) => {
      res.writehead(200, { 'Content-Type': 'text/plain' });
      res.send(['This is the list of our students', output].join('\n'));
    }).catch(() => {
      res.writehead(500, { 'Content-Type': 'text/plain' });
      res.send('This is the list of our students\nCannot load the database');
    });
  }

  static getAllStudentsByMajor(req, res) {
    res.writehead({ 'Content-Type': 'text/plain' });
    if (req.param.major) {
      if (req.param.major === 'CS' || req.param.major === 'SWE') {
        util.countStudents(process.argv[2].toString()).then((output) => {
          res.writehead(200, { 'Content-Type': 'text/plain' });
          output = output.slice(0, -1);
          res.send(output);
        }).catch(() => {
          res.writehead(500, { 'Content-Type': 'text/plain' });
          res.send('This is the list of our students\nCannot load the database');
        });
      }

    }
    res.status(500).send('Major parameter must be CS or SWE');
  }
}
