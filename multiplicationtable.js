function calculateMultiplicationTable(tableOf, till) {
  if (typeof tableOf !== "number" || typeof till !== "number") {
    throw new Error("Both inputs must be numbers.");
  }

  if (tableOf <= 0 || till <= 0) {
    throw new Error("Values must be positive numbers.");
  }
  const result = [];
  for (let i = 1; i <= till; i++) {
    result.push(`${tableOf} x ${i} = ${tableOf * i}`);
  }

  return result;
}

// Example Usage
try {
  console.log(calculateMultiplicationTable(2, 8).join("\n"));
} catch (error) {
  console.error(error.message);
}
