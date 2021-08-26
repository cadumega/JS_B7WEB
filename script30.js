// Precisamos enviar o que queremos e entender o que foi recebido . 
// Posso me comunicar em JSON ou xml ,etc...

// Objeto Javascript em que você armazena infinita informações 

/*
let pessoa = {nome:'Carlos' , idade: 99};

console.log(pessoa.nome);
*/

// A partir de agora a var pessoa esta como um objeto.

let pessoa = {
    nome: 'Carlos',
    idade: 99,
    caracteristicas: ['sorridente', 'maravilhoso', 'top']
};

console.log(pessoa.idade);



// Ter um objeto dentro de um objeto.

let pessoa2 = {
    nome:'Carol',
    idade: 26,
    estetica: {
      altura: 900,
      peso:10
    }
}

console.log(pessoa2.nome);
console.log(pessoa2.estetica);
console.log(pessoa2.estetica.peso);

let pessoa2 = {nome:'Carol',idade: 26,estetica: {altura: 900,peso:10}};