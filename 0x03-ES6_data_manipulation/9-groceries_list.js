/**
 * Returns a Map object containing grocery items and their quantities.
 *
 * @return {Map<string, number>} A Map object with grocery items as keys and quantities as values.
 */
export default function groceriesList() {
  const myMap = new Map();
  myMap.set('Apples', 10);
  myMap.set('Tomatoes', 10);
  myMap.set('Pasta', 1);
  myMap.set('Rice', 1);
  myMap.set('Banana', 5);
  return myMap;
}
