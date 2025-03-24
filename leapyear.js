function isLeapYear(year) {
  // each after 3 years

  if (typeof year !== "number" && year > 0) {
    throw new Error("string now allowed");
  }

  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log("Yah, This is leap year✨,2004",isLeapYear(2004));
