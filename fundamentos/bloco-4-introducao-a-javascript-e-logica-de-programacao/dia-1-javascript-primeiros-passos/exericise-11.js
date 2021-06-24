let salarioBruto = 3000;
let inss;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * (8/100);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * (9/100);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = salarioBruto * (11/100);
} else {
  inss = 570.88
}

let salarioInssDeduzido = salarioBruto - inss;
let ir;

if (salarioInssDeduzido <= 1903.98) {
  ir = 0
} else if (salarioInssDeduzido > 1903.98 && salarioInssDeduzido <= 2826.65) {
  ir = (salarioInssDeduzido * 7.5/100) - 142.80;
} else if (salarioInssDeduzido > 2826.65 && salarioInssDeduzido <= 3751.05) {
  ir = (salarioInssDeduzido * 15/100) - 354.80;
} else if (salarioInssDeduzido > 3751.05 && salarioInssDeduzido <= 4664.68) {
  ir = (salarioInssDeduzido * 22.5/100) - 636.13;
} else {
  ir = (salarioInssDeduzido * 27.5/100) - 869.36; 
}

let salarioLiquido = salarioInssDeduzido - ir;

console.log(salarioLiquido);
