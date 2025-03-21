//  problem statement : write a function that returns the reverse of a string
// like hello => olleh

function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Invalid input: Expected a string");
    // return;
  }

  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
  }
  return reverseString;
}

console.log(reverseString("hello"));
// console.log(reverseString(23));
console.log(reverseString("Lakhan goes in khadyat"));
