let pessoa = {
  nome:'Carlos',
  // sobrenome:'Lopes',
  idade:'30',
  social:{                        //objeto dentro de outro objeto
    facebook:'cadu',
    instagram:{
      url:'@cadu',
      seguidores:1000
    }
  },
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`
  }
}

// let { facebook,instagram } = pessoa.social;
// let { nome, idade, social : {instagram}} = pessoa;         // Seleionei o objeto que eu quero para gerar as variaveis.
// let { nome, idade, social:{instagram:{url:instagram,seguidores}}} = pessoa;         
// let { nome, idade, social:{instagram}}= pessoa;         

// // console.log(nome, idade, instagram, seguidores);
// console.log(nome, idade, instagram);


// function pegarNomeCompleto(obj) {
//   return obj.nome+' '+obj.sobrenome;
// }


// function pegarNomeCompleto(obj) {
//   let nome = obj.nome;
//   let sobrenome = obj.sobrenome;
//   return `${nome} ${sobrenome}`;
// }

function pegarNomeCompleto({nome, sobrenome = 'Silva', social:{instagram:{url:instagram}}}) {    // desconstruindo no proprio parametro que irá gerar as minhas variaveis
  return `${nome} ${sobrenome} (Siga em ${instagram})`;
}


console.log(pegarNomeCompleto(pessoa));