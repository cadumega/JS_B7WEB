let novoValor = Math.round(3.54)         // arredonda, dependendo do n°
console.log(novoValor);

let novoValor2 = Math.floor(3.99)        //inverso , p/ arredondar para cima ceil
console.log(novoValor2);

let novoValor3 = Math.ceil(3.1)          // arredonda para cima
console.log(novoValor3);

let novoValor4 = Math.abs (-9.645487);   //número absoluto de determinado numero
console.log(novoValor4);

let novoValor5= Math.min(2,4,434,5)     //retorna com o menor n°
console.log(novoValor5);


let novoValor6= Math.max(2,4,434,6)     //retorna o > n°
console.log(novoValor6);


let espaço = "__________"
console.log(espaço);
//#2

let novoValor7 = Math.floor(Math.random() * 100);          //pega n° aleatorio entre 0 e 1
console.log(novoValor7);



console.log(espaço);
//#3

const numbers = [1, 20, 37, 61, 2, 89, 4];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
     
console.log(min, max);