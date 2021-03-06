//Exercicio 3.1
const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

//Exercicio 3.2
const removeVowels = (word) => {
  const characters = word.split('');
  let results = '';
  let numberOfVogal = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      numberOfVogal += 1;
      results += numberOfVogal;
    } else {
      results += characters[index];
    }
  }
  return results;
};


const parameter1 = 'Dayane';
const result1 = 'D1y2n3';

assert.strictEqual(removeVowels(parameter1), result1);

//Exercicio 3.3
const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter2 = [4, 10, 32, 9, 21];
const result2 = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter2), result2);

//Exercicio 4.4
function secondThirdSmallest(array) {
  let results = []
  array.sort(function (x, y) {
      return x - y;
  });
  results = [array[1], array[2]];
  return results;
};

const parameter3 = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result3 = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter3), result3);
