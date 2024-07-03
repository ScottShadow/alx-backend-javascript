/**
 * Cleans a set of strings by removing a specified start string
 * from each string and concatenating the remaining parts.
 *
 * @param {Set<string>} set - The set of strings to be cleaned.
 * @param {string} startString - The start string to be removed from each string.
 * @return {string} - The cleaned string with the start string removed
 * and the remaining parts concatenated.
 */
export default function cleanSet(set, startString) {
  let reString = '';
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return reString;
  }
  for (const i of set) {
    if (typeof i === 'string' && i.startsWith(startString)) {
      if (reString) {
        reString += '-';
      }
      reString += i.replace(startString, '');
    }
  }
  return reString;
}
