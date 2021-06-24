let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 1; index <= numbers.length; index += 1) {
  for (let secondIndex = index - 1; secondIndex < index; secondIndex += 1) {
    if (index === numbers.length) {
      newNumbers.push(numbers[secondIndex] * 2);
    } else {
      newNumbers.push(numbers[index] * numbers[secondIndex]);
    }
  }
}

console.log(newNumbers);