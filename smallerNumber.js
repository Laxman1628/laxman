// find the small number in the given string
// input 3 = 3,1,6 output should be small number like 1

function findSmallNumber(...numbers) {
  if (!numbers.every((num) => typeof num === "number")) {
    console.log(numbers.every((num) => typeof num === "number"));
    return;
  }

  let small_number = numbers[0];

  for (let i = 0; i < numbers?.length; i++) {
    if (numbers[i] < small_number) {
      small_number = numbers[i];
    }
  }
  return small_number;
}

let result = findSmallNumber(3, 1, 2);
console.log("result of small number is :", result);
