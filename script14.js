let lista = ['Ovo','Farinha','Corante','Massa'];

lista.push('Prato');   //Método q irá mais utilizar, pois add um novo item
lista[5] ='Liquidificador';

let res = lista

console.log(res);

// lista.pop();      //remove o ultimo item
// lista.shift();      //remove o primeiro item
//let res = lista.indexOf('Corante');  // Se for um item q não achou retorna -1      
//let res = lista.join('-')      
//let res = lista.toString();

let espaço ='____________'
console.log(espaço);
//#2 Remover item da array

let receita = ['Ovo','Farinha','Corante','Massa'];

receita.splice(2 ,1)    // remover a partir do item 1, e quero remover do index1
let resultado = receita
console.log(resultado);


let receita2 = ['Prato','Garfo','Forno']
let res2 = lista.concat(receita2);

res2.sort();     //Colocar em ordem alfabetica
res2.reverse();  //Inverte a ordem da array

console.log(res2);

console.log(espaço);
//#3 

let numberLista = [1, 2, 45, 8 , 16, 25]
let numberLista2 = [];                          // Gerar uma array *2, inicialmente vazio

numberLista2 = numberLista.map( function(item) {    // a fç map irei criar uma fç dentro dela, item a item irá rodar a fç, recebe o proprio item q podemos chamar de (item)
    return item * 2;
});

//ou , dependendo do caso o map é mais interessante q o for.

// for (let i in numberLista) {
//   numberLista2.push(numberLista[i] * 2)
// }


let resNumber = numberLista2;

console.log(resNumber);


// no momento que você usar o lista.map(), automáticamente o map ele vai "pegar cada item" que está dentro do Array lista e jogar dentro do parâmetro da função que está dentro dele, no exemplo do prof foi item. E cada vez que ele fazer o mapeamento ele vai pegar o retorno da função e vai armazenar a um item no array criado pelo map();

console.log(espaço);
//#4 Filtro

let listagem = [3,5,45,15,25,6]
let listagem2 = [];
                                                    //lista.every    // todos precisam ser, ai retorna true or false.
listagem2 = listagem.filter(function(item) {        //lista.some     //retorna true se algum for maior que 20
    if(item > 20){                 
      return true;  
    } else {
      return false;
    }
});
// forma simples Ternario (escrita inline) : 
// return (item >20)? true : false;

let res3 = listagem2;
console.log(res3);

//#5 Find

let list= [,9,4,15,47,20,3]
let list2 = [];

list2 = list.find(function(item) {          //findIndex   - acha a posição
    return(item == 15) ? true :false;
});


let result = list2;
console.log(result);

console.log(espaço);
//_____ex6
let alunos = [                       ///Criar uma array , dentro dela com objetos
  {id:1, nome:'Carlos', sobrenome:'Mega'},
  {id:2, nome:'Luiz', sobrenome:'Carvalho'},
  {id:3, nome:'Pedro', sobrenome:'Silva'}
];

let pessoa = alunos.find(function(item){
  // return(item.sobrenome == 'Carvalho') ? true: false;
  return(item.id == 3) ? true: false;
})


let resultAlunos = pessoa;

console.log(resultAlunos);


//ex7_____
// A ideia do find seria a aplicação prática das callbacks (funções passadas como parametros para outras funções), um exemplo mais simples para vc entender:
  
function doSomethingWithOne(callback) {
    return callback(1);
}
  
doSomethingWithOne(console.log); // vai mostrar 1 na tela
 
  
// No código acima "doSomethingWithOne" recebe uma função como parametro, e então devolve o resultado da execução dessa função passando como parametro, o 1 para ela. Então como passamos o console.log para ela, o 1 foi passado para o console.log, que então imprimiu 1 na tela. A ideia do find é a exatamente a mesma:
  

// obs: o find serve para encontrar o primeiro que der true na pesquisa, 
// se você quer que ele volte todos então você deveria utilizar o filter e não o find.