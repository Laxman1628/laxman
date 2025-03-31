function countVowels(str) {
  if (typeof str !== "string") {
    throw new Error("Only string inputs are allowed");
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;
  let constant = 0;
  let formattedArray = str.toLowerCase().replace(" ", "");
  for (let i = 0; i < formattedArray?.length; i++) {
    if (formattedArray[i].match(/[a-z]/)) {
      if (vowels.includes(formattedArray[i])) {
        vowelsCount += 1;
      } else {
        constant += 1;
      }
    }
  }

  return { vowelsCount, constant };
}

try {
  console.log(countVowels(2));
} catch (error) {
  console.log(error.message);
}
