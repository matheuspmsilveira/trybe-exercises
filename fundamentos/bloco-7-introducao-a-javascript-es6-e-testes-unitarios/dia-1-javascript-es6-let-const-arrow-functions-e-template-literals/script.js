// Parte 1.1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Parte 1.2
let oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte 2.1
const fatorial = (number) => {
  let result = 1;

  for (let index = number; index > 0; index -= 1) {
    result *= index;
  }

  return result;
}

console.log(fatorial(4));

// Parte 2.2 
const longestWord = (text) => {
  let wordSplit = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (let index = 0; index < wordSplit.length; index += 1) {
    if (wordSplit[index].length > maxLength) {
      maxLength = wordSplit[index].length;
      result = wordSplit[index];
    }
  }

  return result;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
