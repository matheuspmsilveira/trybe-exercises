function indexOfHigher(numbers) {
  let higherIndex = 0;
  for (let index in numbers) {
    if (numbers[index] > numbers[higherIndex]) {
      higherIndex = index;
    }
  }
  return higherIndex
}

console.log(indexOfHigher([2, 3, 6, 7, 10, 1]));
