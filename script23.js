// possibilidades distintas de criar uma função

/*
function somar(x,y) {
    return x + y
}
*/

/*
let somar = function (x,y) {
    return x + y
}
*/

/*
const somar = (x,y) => {
  return x + y
}
*/

let somar = (x,y) => x + y;             // expressão direta, se colocar chaves preciso colocar return


/*
let letrasNoNome = (nome) => {
  return nome.length;
}
*/

// let letrasNoNome = (nome) => nome.length;

let letrasNoNome = nome => nome.length;      // um parametro só, o parenteses é opcional

console.log(somar(10,5));

console.log(letrasNoNome('Carlos'));


// NAO TEMOS O OBJETO this na função anonima de arrow function.