/**
 * Calculates the sum of the student IDs in the given list of students.
 *
 * @param {Array} getListStudents - The list of students.
 * @return {number} The sum of the student IDs.
 */
export default function getStudentIdsSum(getListStudents) {
  // Using the reduce method to calculate the sum of the student IDs
  return getListStudents.reduce((sum, value) => sum + value.id, 0);
}
