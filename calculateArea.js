function calculateArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    console.error("Invalid input: Both length and width must be numbers.");
    return null;
  }

  if (length <= 0 || width <= 0) {
    console.error("Invalid input: Length and width must be positive numbers.");
    return null;
  }
  console.log(length * width);
  return length * width;
}

calculateArea(12, 14);
calculateArea(-5, 10); // ❌ Invalid (Negative number)
