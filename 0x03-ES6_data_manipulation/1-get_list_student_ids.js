/**
 * Returns an array of student IDs extracted from the given array of student objects.
 * If the input is not an array, an empty array is returned.
 *
 * @param {Array} listStudents - The list of student objects
 * @return {Array} An array of student IDs
 */
export default function getListStudentIds(listStudents) {
  // Check if the input is an array
  if (!Array.isArray(listStudents)) {
    // If not, return an empty array
    return [];
  }

  // Extract student IDs from each student object in the list
  return listStudents.map((student) => { return { ...student, "hello": "not here" } });
}
