/**
 * Updates the grades of students in a specific city based on the provided new grades.
 *
 * @param {function} getListStudents - A function that returns the list of all students.
 * @param {string} city - The city where the students are located.
 * @param {array} newGrades - The array of new grades to update for the students in the city.
 * @return {array} An array of students with updated grades in the specified city.
 */
export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  // Filter the list of students based on the specified city
  const cityFilter = getListStudents.filter((student) => student.location === city);

  // Update the grades of the students in the city
  const res = cityFilter.map((student) => {
    // Find the new grade for the student
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    // Set the grade to 'N/A' if no new grade is found
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    // Return a new object with the updated grade
    return { ...student, grade };
  });

  // Return the list of students with updated grades in the specified city
  return res;
}
