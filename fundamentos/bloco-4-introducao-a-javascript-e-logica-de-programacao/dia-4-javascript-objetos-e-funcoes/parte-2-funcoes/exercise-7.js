function similarEnding(word, ending) {
  let inverseWord = word.split('').reverse();  
  let inverseEnding = ending.split('').reverse();
  let result = true;
  for (let index = 0; index < inverseEnding.length; index += 1) {
    if (inverseEnding[index] !== inverseWord[index]) {
      result = false;
    break;
    }
  }
  return result;
}
console.log(similarEnding('trybe', 'be'));
console.log(similarEnding('joaofernando', 'fernan'));
console.log(similarEnding('trybe', 'ibe'));
console.log(similarEnding('joaofernando', 'nando'));
