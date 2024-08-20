#!/usr/bin/node
const fs = require('fs');

/**
 * Synchronously counts the number of students in a file.
 *
 * @param {string} path - The path to the file containing the students.
 * @throws {Error} If the file cannot be loaded.
 */
function countStudents(path) {
  try {
    // Read the file contents
    const data = fs.readFileSync(path, 'utf8');

    // Split the file into lines and process each line into a student array
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove the first line (header)
    const header = lines.shift();

    // Initialize newis array and process each student in result
    const newis = lines.map((line) => {
      const student = line.split(',');
      return [student[0].trim().replace(/\r$/, ''), student[3].trim().replace(/\r$/, '')];
    });
    //console.log("+++newis", newis);
    // Initialize fields set and add each unique location to fields set
    const fields = new Set();
    newis.forEach((item) => {
      fields.add(item[1]);  // Populate the fields set with unique locations
    });
    //console.log("+++fields", fields);

    // Initialize final object with keys from the fields set and count students
    const final = {};
    fields.forEach((location) => {
      final[location] = 0;  // Initialize count for each field
    });
    // Count the number of students in each location
    newis.forEach((student) => {
      if (final[student[1]] !== undefined) {
        final[student[1]] += 1;
      }
    });
    //console.log("+++final", final);

    // Log the total number of students (filtering out invalid rows)
    const validStudentsCount = newis.filter(student => student[0] && student[1]).length;
    console.log(`Number of students: ${validStudentsCount}`);

    // Log the number of students in each location and list of first names
    Object.keys(final).forEach((location) => {
      const studentsInField = newis.filter(student => student[1] === location).map(student => student[0]);
      //console.log("+++studentsinf", studentsInField);
      console.log(`Number of students in ${location}: ${final[location]}. List: ${studentsInField.join(', ')}`);
    });


  } catch (error) {
    // Handle error loading the file
    //console.error('Cannot load the database', error.message);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
