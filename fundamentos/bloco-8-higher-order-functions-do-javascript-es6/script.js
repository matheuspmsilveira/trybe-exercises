//Exercício 1
const objectGenarator = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return {
    nome: name,
    email: `${email}@trybe.com`,
  }
};

const newEmployees = () => {
  const employees = {
    id1: objectGenarator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: objectGenarator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: objectGenarator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
