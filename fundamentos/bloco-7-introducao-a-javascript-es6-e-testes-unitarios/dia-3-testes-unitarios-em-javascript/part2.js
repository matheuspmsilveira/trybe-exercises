//Exercicio 2.1
const assert = require('assert');
const addOne = (array) => {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(array[index] + 1);
  }

  return result;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//Exercicio 2.2
const wordLengths = (words) => {
  let result = [];

  for (let index = 0; index < words.length; index += 1) {
    const element = words[index];
    result.push(element.length);
  }

  return result;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected1 = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output1 = wordLengths(words);
assert.deepStrictEqual(output1, expected1);
