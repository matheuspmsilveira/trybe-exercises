//Parte 1 - exercicio 1

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'retorno da função não é igual a 9');
assert.strictEqual(sum(0, 0), 0, 'retorno da função não é igual a 0');
assert.throws(() => {sum(4, "5")}, /^Error: parameters must be numbers$/);

//Exercicio 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'função não retorna o array [1, 2, 4]');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'função retorna array [1, 2, 3, 4]');

const myRemoveArray = [1, 2, 3, 4];
myRemove(myRemoveArray, 3);
assert.deepStrictEqual(myRemoveArray, [1, 2, 3, 4], 'array se modificou');

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'função retornar array errado');

//Exercicio 3
function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'função não retorna o array [1, 2, 4]');
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'função retorna array [1, 2, 3, 4]');

const myRemoveArray1 = [1, 2, 3, 4];
myRemoveWithoutCopy(myRemoveArray1, 3);
assert.deepStrictEqual(myRemoveArray1, [1, 2, 4], 'array não se modificou');

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'função retornar array errado');
