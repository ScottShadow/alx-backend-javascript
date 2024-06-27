/**
 * A class representing a HolbertonCourse.
 *
 * @class HolbertonCourse
 * @param {string} name - The name of the course.
 * @param {number} length - The length of the course.
 * @param {Array.<string>=} [students=[]] - The array of students enrolled in the course.
 */
export default class HolbertonCourse {
  /**
   * Constructor for creating a new HolbertonCourse.
   *
   * @constructor
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course.
   * @param {Array.<string>=} [students=[]] - The array of students enrolled in the course.
   */
  constructor(name, length, students = []) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get the name of the course.
   *
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the course.
   *
   * @param {string} newName - The new name of the course.
   */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  /**
   * Get the length of the course.
   *
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Set the length of the course.
   *
   * @param {number} newLength - The new length of the course.
   */
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  /**
   * Get the array of students enrolled in the course.
   *
   * @returns {Array.<string>} The array of students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the array of students enrolled in the course.
   *
   * @param {Array.<string>} newStudents - The new array of students enrolled in the course.
   */
  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!(newStudents.every((student) => typeof student === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
