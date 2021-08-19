// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((res) => res.json())
    .then(
      (data) => (document.querySelector('#jokeContainer').innerHTML = data.joke)
    );
};

/*const promise = () => {
  new Promise((resolve, reject) => {
    const arrayOfNum = Array.from({ length: 10 }, () => {
      const number = Math.floor(Math.random() * 50 + 1);
      return number * number;
    });

    const sum = arrayOfNum.reduce((acc, value) => acc + value);
    sum < 8000 ? resolve(sum) : reject();
  })
    .then((sum) => [2, 3, 5, 10].map((value) => sum / value))
    .then((arr) => arr.reduce((acc, value) => acc + value, 0))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};*/

//Refatorada para async/await
const sumNumbers = () => {
  const arrayOfNum = Array.from({ length: 10 }, () => {
    const number = Math.floor(Math.random() * 50 + 1);
    return number * number;
  });

  const sum = arrayOfNum.reduce((acc, value) => acc + value);
  if (sum >= 8000) {
    throw new Error();
  }
  return sum;
};

const sumArrayFromSum = (sum) =>
  [2, 3, 5, 10]
    .map((number) => sum / number)
    .reduce((number, acc) => number + acc);

const promise = async () => {
  try {
    const sumOfArray = await sumNumbers();
    const sumOfSumArray = await sumArrayFromSum(sumOfArray);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

promise();

window.onload = () => fetchJoke();
