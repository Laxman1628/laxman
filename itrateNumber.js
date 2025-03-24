function createLoop(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  console.log(num); // Print current iteration value
  return createLoop(num - 1);
}

console.log(createLoop(10));
