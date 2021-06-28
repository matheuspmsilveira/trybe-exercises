let n = 5;
let asterisco = "*";
let space = " ";
let inputPlace = "";
let inputPosition = n;
let centralPosition = (n+1)/2
let leftSpace = centralPosition;
let rightSpace = centralPosition;

for (let index = 0; index <= centralPosition; index += 1) {
  for (indexColumn = 0; indexColumn <= n; indexColumn += 1) {
    if (indexColumn > leftSpace && indexColumn < rightSpace) {
      inputPlace += asterisco
    } else {
      inputPlace += space
    }
  }
  console.log(inputPlace);
  inputPlace = ""
  rightSpace += 1
  leftSpace -= 1
}
