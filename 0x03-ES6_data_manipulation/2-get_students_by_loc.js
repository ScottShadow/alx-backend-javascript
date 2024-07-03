/**
 * Returns an array of students from the given list of students
 * that are located in the specified city.
 *
 * @param {Array} listStudents - The list of students to filter.
 * @param {string} city - The city to filter by.
 * @return {Array} An array of students located in the specified city.
 */
export default function getStudentsByLocation(listStudents, city) {
  /**
   * Filters the list of students based on the specified city.
   *
   * @param {Object} student - The student object to filter.
   * @return {boolean} Returns true if the student is located in the specified city,
   *  false otherwise.
   */
  // Filter the list of students based on the specified city
  return listStudents.filter((student) => student.location === city);
}
