let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultOfSum = 0;
let resultOfMedia = 0;

for (let i = 0; i < numbers.length; i += 1) {
  resultOfSum += numbers[i];
  resultOfMedia = resultOfSum / numbers.length;
}

console.log(resultOfMedia);
