export default function appendToEachArrayValue(array, appendString) {
  const arrayOther = [];
  for (const idx of array) {
    arrayOther.push(`${appendString}${idx}`);
  }
  return arrayOther;
}
