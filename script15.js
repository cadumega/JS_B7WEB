// Objeto Date tem várias fç que podemos trabalhar

let d = new Date();             //criando um obj da class Date

console.log(d);                 // Sat Aug 21 2021 13:04:22 GMT-0300 (Horário Padrão de Brasília)

console.log(d.toDateString());  // data mais resumida  // Sat Aug 21 2021

console.log(d.toString());      // pega o texto da data


// Gerar uma data baseado nessas inf.
// let d2 = new Date(2020, 0, 1, 12, 30, 12);
let d2 = new Date('2020-01-01 15:42:17');

console.log(d2);


let espaço ='____________'
console.log(espaço);
// #2

let d3 = new Date();                      // pega a data naquele instante e congela.

let novoValor4 = d3;
let novoValor = d3.getFullYear();
let novoValor2 = d3.getMonth();          //Mes começa com 0 - jan
let novoValor3 = d3.getDay();            //Semana no js, começa no 0-Dom

console.log(novoValor);
console.log(novoValor2);
console.log(novoValor3);
console.log(novoValor4);


console.log(espaço);
// #3

let d5 = new Date();
let d6 = new Date();
let d7 = new Date();
let d8 = new Date();

d5.setFullYear(2022);
d6.setDate ( d6.getDate() + 5)          // insere a inf. e vou dizer o prazo final
d7.setHours ( d7.getHours() + 24)        // 
d8.setMinutes ( d8.getMinutes()+30)        // 

let novoValor5 = d5;
let novoValor6 = d6;
let novoValor7 = d7;
let novoValor8 = d8;

console.log(novoValor5);
console.log(novoValor6);
console.log(novoValor7);
console.log(novoValor8);


console.log(espaço);
//#4

var dat = new Date();
var v = new Date();
v.setMinutes(dat.getMinutes()+30);
console.log(v)


console.log(espaço);
//#5

var oldDateObj = new Date();
var newDateObj = new Date();
newDateObj.setTime(oldDateObj.getTime() + (30 * 60 * 1000));
console.log(newDateObj);