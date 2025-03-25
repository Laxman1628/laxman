// duplicatenumber
// [1,2,6,7,5]=> [1,5,6,7]

function removeDuplicate(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input: Expected an array.");
  }
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return [...new Set(arr)]
//   return newArray;
}

console.log(removeDuplicate([1, 2, 3, 3, 4]));
