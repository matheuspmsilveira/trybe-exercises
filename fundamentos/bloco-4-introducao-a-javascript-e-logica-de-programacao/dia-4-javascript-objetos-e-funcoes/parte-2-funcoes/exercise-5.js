function moreRepeats(numbers) {
  let indexRepeat = 0;
  let indexNumber = 0;
  let indexOfNumberMoreRepeat = 0;
  for (let index in numbers) {
    let numberVerify = numbers[index];
    for (let index2 in numbers) {
      if (numberVerify === numbers[index2]) {
        indexNumber += 1;
      }
    }
    if (indexNumber > indexRepeat) {
      indexRepeat = indexNumber;
      indexOfNumberMoreRepeat = index;
    }
    indexNumber = 0;
  }
  return numbers[indexOfNumberMoreRepeat];
}

console.log(moreRepeats([2, 3, 2, 5, 8, 2, 3]));
