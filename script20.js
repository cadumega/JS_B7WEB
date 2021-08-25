let pessoa = {
  nome:'Carlos',
  sobrenome:'Lopes',
  // idade:'30',
  social:{                        //objeto dentro de outro objeto
    facebook:'cadu',
    instagram:'@cadu'
  },
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`
  }
}

// console.log(pessoa.nomeCompleto());;

//Realizar a descontrução, salvar em uma var.

/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let instagram = pessoa.social.instagram;

IGUAL A: */

let {nome:pessoaNome, sobrenome , idade = 0} = pessoa;      //irão se transformar em variáveis, do objeto pessoa. Var independentes // Consigo alterar o nome da var:pessoaNome //Definir valor padrão

console.log(pessoaNome, sobrenome, idade);