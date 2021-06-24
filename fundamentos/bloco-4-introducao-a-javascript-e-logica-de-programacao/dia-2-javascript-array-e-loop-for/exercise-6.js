let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantityOddNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    quantityOddNumbers += 1;
  }
}

if (quantityOddNumbers !== 0) {
  console.log(quantityOddNumbers);
} else {
  console.log("nenhum valor ímpar encontrado");
}
