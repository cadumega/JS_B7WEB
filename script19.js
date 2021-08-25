// Código mais legível e simples com Template String, não preciso estar fechando e abrindo string ou concatenando.

let nome = 'Carlos';
let idade = '30';

// let frase = 'Meu nome é '+nome+', eu tenho '+idade+' anos e ano que vem farei '+(idade+1)+' anos';
let frase = `Meu nome é ${nome}, tenho ${idade} anos e ano que vem farei ${idade+1} anos. `

console.log(frase);