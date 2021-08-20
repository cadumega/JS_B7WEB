//ex1
let nome = 'Carlos Mega'
let resultado = nome.length;

let find = nome. indexOf('C');

console.log(resultado);
console.log(find);


//ex2
// Criei uma variavel vazia, no qual irei "alimentar" ela com uma condição caso se satisfaça
let findWord ='';

if(nome.indexOf('Silva') > -1) {
    findWord = 'Achou!'
} else {
   findWord = 'Não achou!'
}

console.log(findWord);

//ex3

let nome2 ='Caroline Valle';

let result = nome2.slice(9);
let result2 = nome2.substr(9 , 1);   // Posição inicial e final, + indicado

console.log(result);
console.log(result2);

//ex4 

let nome4 ='Eu gosto de carros';

let result4 = nome4.replace('carros', 'motos');

console.log('nome:' , nome4);
console.log('resultado:' , result4);

console.log(result4);
 
let capslock = nome.toUpperCase(nome4);
console.log(capslock);


let nome6 = 'Bonieky'
let resultado6 = nome6+ ' Lacerda';
console.log('resultado: ', resultado6);


let nome7 = '          Espaço             '
let resultado7 = nome7.trim().length;        //remove os espaços vazios do inicio e fim nome7.length;
console.log(resultado7);


let nome8 = 'Rita'
let resultado8 = nome8[1];        //usa charAt ou substr
console.log(resultado8);

let receita = 'ovo;massa;corante;farinha'
let resultado9 = receita.split(';');   //Gera uma array
console.log(resultado9);