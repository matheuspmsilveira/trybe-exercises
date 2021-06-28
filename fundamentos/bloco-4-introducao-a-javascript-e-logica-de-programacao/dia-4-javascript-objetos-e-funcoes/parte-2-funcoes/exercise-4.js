function biggestOfNames(names) {
  let biggestName = names[0];
  for (let index in names) {
    if (names[index].length > biggestName.length) {
      biggestName = names[index];
    }
  }
  return biggestName;
}

console.log(biggestOfNames(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
