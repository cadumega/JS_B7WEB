let n = 10;

let res = n;     //n.toString() + 5;

console.log(res);


// Uso bastante com R$
let bitcoin = 10.648586947;

let resBitcoin = 'R$ '+ bitcoin.toFixed(2);

console.log(resBitcoin);


// Uso bastante em campos input, converter string para float number
let number = '25.9';

let resNumber = parseInt(number) + 5;
let resNumber2 = parseFloat(number) + 5;

console.log(resNumber);
console.log(resNumber2);