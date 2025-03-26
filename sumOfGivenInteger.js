// write a function that calculate and print the sum of the digit of a given number
// like 12 => 3 , 123 => 6

function calculateSumOfGivenNumber(num) {
  if (num < 0) {
    throw new Error("positive number only allowed");
  }
  let splitArray = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < splitArray?.length; i++) {
    sum = sum + parseInt(splitArray[i]);
  }
  return sum;
}
console.log(calculateSumOfGivenNumber(-1234)); // output : 10
