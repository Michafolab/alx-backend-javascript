export default function appendToEachArrayValue(array, appendString) {
  const comb = [];
  for (const value of array) {
    comb.push(appendString + value);
  }

  return comb;
}
