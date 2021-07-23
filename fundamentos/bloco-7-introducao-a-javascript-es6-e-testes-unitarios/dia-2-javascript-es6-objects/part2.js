const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addKeyValueInObject(object, key, value) {
  object[key] = value;
}

addKeyValueInObject(lesson2, 'turno', 'manhã');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function keysOfObject(object) {
  return Object.keys(object);
}

//Crie uma função para mostrar o tamanho de um objeto.
function objectLength(object) {
  return Object.keys(object).length;
}

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function valuesOfObject(object) {
  return Object.values(object);
}
