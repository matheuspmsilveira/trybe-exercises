let n = 5;
let asterisco = "*";
let space = " ";
let inputPlace = "";
let inputPosition = n;

for (let index = 0; index < n; index += 1) {
  for (indexColumn = 0; indexColumn <= n; indexColumn += 1) {
    if (indexColumn < inputPosition) {
      inputPlace += space
    } else {
      inputPlace += asterisco
    }
  }
  console.log(inputPlace);
  inputPlace = ""
  inputPosition -= 1;
}
