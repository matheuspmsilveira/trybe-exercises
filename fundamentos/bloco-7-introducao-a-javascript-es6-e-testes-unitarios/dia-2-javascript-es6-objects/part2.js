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

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = {};
allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numberOfStudents = (object) => {
  let result = 0;
  const objectArray = Object.keys(object);
  for (let index = 0; index < objectArray.length; index += 1) {
    result += object[objectArray[index]].numeroEstudantes;
  }
  return result;
}

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
const getValueByNumber = (object, position) => {
  const valueArray = Object.values(object);
  return valueArray[position];
}
