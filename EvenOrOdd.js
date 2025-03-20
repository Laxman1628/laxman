function EvenOrOdd(number) {
  // Even means if we divide by two then reminder is 0. or odd means 1

  if (typeof number !== "number") {
    console.log("it will not work");
    return;
  }
  if (number % 2 === 0) {
    console.log("Number is Even :", number);
  } else {
    console.log("Number is ODD", number);
  }
}

EvenOrOdd(3);
EvenOrOdd("4");
