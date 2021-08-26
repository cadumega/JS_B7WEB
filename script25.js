// Não sei quantos parametros o usuário irá usar

function adicionar (...numeros) {
    console.log(numeros);
}


adicionar(5,1,6,4,8,10,12);



function adicionar(...nomes) {
  console.log(nomes);
}

adicionar('Carlos','Paulo','Carol')

// Ira retornar uma array com todos os meus itens.



//JUNTAR SPREAD com REST

function add (nomes, ...novosNomes) {

    let novoConjunto = [
      ...nomes,                       ///Se eu tirar os 3 pontos, fica como 2 arrays, preciso juntar todos.
      ...novosNomes
    ];

    return novoConjunto
}

let nomes =['Carlos' , 'Paulo'];

let outros = add(nomes, 'Antonio','Maria','Jose');

console.log(outros);