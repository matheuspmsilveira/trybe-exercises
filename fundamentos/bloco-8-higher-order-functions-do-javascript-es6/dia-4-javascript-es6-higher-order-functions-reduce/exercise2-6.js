const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercise 2
const expectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

function reduceNames() {
  const authorNames = books.map((e) => e.author.name);
  const names = authorNames.reduce((acc, curr) => `${acc}, ${curr}`);
  return `${names}.`;
}

assert.strictEqual(reduceNames(), expectedResult);

//Exercise 3
const expectedResult1 = 43;

function averageAge() {
  const ages = books.map((e) => e.releaseYear - e.author.birthYear);
  return ages.reduce((acc, curr) => acc + curr, 0) / ages.length;
}

assert.strictEqual(averageAge(), expectedResult1);

//Exercise 4
const expectedResult2 = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, curr) =>
    acc.name.length > curr.name.length ? acc : curr
  );
}

assert.deepStrictEqual(longestNamedBook(), expectedResult2);

//Exercise 5
const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = names
  .map((e) => e.toLowerCase().split(''))
  .reduce((acc, curr) => acc.concat(curr))
  .reduce((acc, curr) => (curr === 'a' ? acc + 1 : acc), 0);

assert.deepStrictEqual(containsA, 20);

//Exercise 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = students.map((e, idx) => ({
  name: e,
  average: grades[idx].reduce((acc, curr) => acc + curr) / grades[idx].length,
}));

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage, expected);
