let valorCusto = 100;
let valorVenda = 200;
let impostoSobreOProduto = valorCusto * (20/100);
let valorCustoTotal = valorCusto  + impostoSobreOProduto;
let lucro = valorVenda - valorCustoTotal;

console.log(lucro*1000);
