export default function concatArrays(array1, array2, string) {
  const comb = [...array1, ...array2, ...string];
  return comb;
}
