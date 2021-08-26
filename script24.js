// Funciona tanto para arrays , quanto para objetos

let numeros = [1,2,3,4]

let outros = [...numeros, 5,6,7,8]    // complementando com a var já criada Spread Operation

console.log(outros);



let info = {
  nome:'Carlos',
  sobrenome:'Lopes',
  idade:99
};

let novaInfo = {
    ...info,
    cidade:'Rio de Janeiro',
    estado:'RJ',
    país:'Brasil'
}

console.log(novaInfo);

// Você não precisa recriar os dados, consegue aproveitar.


function adicionarInfo(info2) {
      let novasInfo2 = {
        ...info2,
        status:0,
        token:'alshjdhasfioaf'
      };

      return novasInfo2;
}

console.log(adicionarInfo({nome:'Carol', sobrenome:'Candida'}));