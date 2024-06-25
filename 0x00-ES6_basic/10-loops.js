export default function appendToEachArrayValue(array, appendString) {
  const arrayOther = [];
  for (var idx of array) {
    arrayOther.push(`${appendString}${idx}`);
  }

  return arrayOther;
}