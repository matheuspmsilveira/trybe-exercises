function indexOfLowest(numbers) {
  let lowerIndex = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[lowerIndex]) {
      lowerIndex = index;
    }
  }
  return lowerIndex;
}

console.log(indexOfLowest([2, 4, 6, 7, 10, 0, -3]));
