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

//Exercicio 3
const answersComparison = (rightAnswers, studentAnswers) => {
  if (rightAnswers === studentAnswers) {
    return 1;
  } else if (studentAnswers === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
};

const testScore = (rightAnswers, studentAnswers, callback) => {
  let counter = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    counter += callback(rightAnswers[index], studentAnswers[index]);
  }
  return counter;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(testScore(RIGHT_ANSWERS, STUDENT_ANSWERS, answersComparison));
