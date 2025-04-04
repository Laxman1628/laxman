function findFrequency(arr) {
  const frequency = {};
  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  let frequencyCount = {};
  for (let i = 0; i < arr.length; i++) {
    frequencyCount[arr[i]] = (frequencyCount[arr[i]] || 0) + 1;
  }
  return { frequencyCount, frequency };
}

console.log(findFrequency([1, 2, 1]));
