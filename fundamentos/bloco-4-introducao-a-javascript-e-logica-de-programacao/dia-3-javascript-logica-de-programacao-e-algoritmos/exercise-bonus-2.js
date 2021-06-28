let number = 17;
let numberOfDividers = 0;

for (let index = 1; index <= number; index += 1) {
  if (number % index === 0) {
    numberOfDividers += 1
  }
}

if (numberOfDividers === 2) {
  console.log("Sim, " + number + " é um número primo!")
} else {
  console.log("Não, " + number + " não é um número primo!")
}
