function palindromeVerify (word) {
  let inverseWord = ""
  for (let index = word.length - 1; index >= 0; index -= 1) {
    inverseWord += word[index];
  }
  if (inverseWord === word) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeVerify("arara"));
console.log(palindromeVerify("desenvolvimento"));
