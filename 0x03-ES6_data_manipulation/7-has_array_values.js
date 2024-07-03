/**
 * Checks if all values in the array are present in the set.
 *
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of values to check.
 * @return {boolean} Returns true if all values from the array
 *  are present in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  for (const val of array) {
    if (!set.has(val)) return false;
  }
  return true;
}
