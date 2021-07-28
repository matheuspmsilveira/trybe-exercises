//Exercício 1
const objectGenarator = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return {
    nome: name,
    email: `${email}@trybe.com`,
  }
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(objectGenarator));

//Exercicio 2
const resultCheck = (number, randomNumber) => number === randomNumber;

const lotteryResult = (number, func) => {
  const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  return func(number, randomNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(3, resultCheck));
