function largestNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Input must be a non-empty array");
  }
  let MaxNumber = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > MaxNumber) {
      MaxNumber = arr[i];
    }
  }

  return MaxNumber;
}

console.log(largestNumber([-2, -5, -6, -1]));
