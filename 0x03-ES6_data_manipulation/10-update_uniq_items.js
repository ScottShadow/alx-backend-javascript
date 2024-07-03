/**
 * Updates unique items in a Map where the value is 1 to 100.
 *
 * @param {Map} myMap - The Map containing the items to update.
 * @return {Map<string, number>} A Map object with grocery items as keys and quantities as values.
 */
export default function updateUniqueItems(myMap) {
  if (!(myMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  return myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
  });
  /* for (let [key, value] of myMap.entries()) {
    if (value === 1) {
      myMap.set(key, 100);
    }
  } */
}
