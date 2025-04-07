function is_Blank(str) {
  if (str?.length === 0 || str === undefined || str === null) {
    return true;
  }
  return false;
}

console.log(is_Blank(""));
