//  factorial => 5! means 5*4*3*2*1

// its should be positive number

function factorial(num) {
  if (num <= 0) {
    throw new Error("INumber should be grater than zero");
  }

  if (typeof num !== "number") {
    throw new Error("string not allowed");
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(4), "hello");
