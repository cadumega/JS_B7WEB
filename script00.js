/*
Sua mãe te da várias funções no dia a dia, são tarefas, rotinas. Funcionalidades em Programação.
Toda semana sua mãe te entrega dinheiro  para você ir na padaria comprar pão.
Você retorna com a garrafa de leite que é entregue a sua mãe.


Sua mãe te chama e passa a ordem -> Chamada
Toda quarta feira de manha ela te chama ou você pode ter um disparo de toda quarta pela manha, algum evento, pega o din da estante e vai comprar leite, nem sempre é vocal a chamada. Pode ser automatizada.
Você não pode ir na padaria sem o dinheiro que é uma entrada o -> Parametro
O produto que sua mãe quer também é um Parametro de entrada, faz parte da chamada.
Toda função tem uma ação envolvida, o processo para conseguir o pão.
Ao retornar a sua mãe é o Return.
Nem toda fç tem parametros ou retornos.

Começou a chover tirar a roupa do varal, função que executa automaticamente.
*/

/*
Definição técnica.
O botão Ok de clicar sobre ele, dispava um evento onclick. Dentro do onclick você colocava uma chamada no onlick.
Vou adicionar parametros, serão processados pela ação e podem ter um resultado. Precisa de uma chamada os parametros,
para que executa a ação da função. No final retorno um resultado, que é retornado a chamada.

function ação (param) {                 Ação/ (param formal)
    return res                          Retorno
}
ação(5)                                 Chamada/ (param real)

*/

//ex1 Par ou impar ?
function parImp(n) {
    if(n%2==0) {
        return'par'
    }else {
        return'ímpar'
    }
}                                      //Se eu deixar o código assim ele não irá executar, pois preciso de uma chamada.

let res = parImp(11)                   //Criei uma var chamada res , e fiz a chamada com param 11. Irá retornar impar para o meu res.
console.log(res);
// console.log(parImp(223));                                     //Poderia colocar dessa maneira


//ex2

function soma(n1=0,n2=0) {              //Se eu não passar n1 é igual a 0, São Param Pré definidos. 
    return n1+n2
}

console.log(7);                         //Não ira retornar NaN, 7 com nada = 7
// console.log(soma(2,5));  //7


//ex3
let v = function (x) {                   // var v recebe um param, e consegue executar uma fç
    return x*2
}
console.log(v(5));                       // v recebendo 5 como param, e conseguiu executar fç


//ex4
// 5! = 5 * 4 * 3 * 2 * 1
function fatorial(n) {
    let fat = 1
    for (let c=n; c>1; c--) {            // Contador começando em n, em qt contador for > 1, tem um decremento de -1. Começa no n° e em qt for > 1 ,perde 1
        fat *= c
    }
    return fat
}

console.log(fatorial(5));

//ex5 Fatorial de forma Recursiva, que chama ela mesma
/*
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n * (n-1)!
1! = 1
*/


function fat(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fat (n-1)
    }
}
console.log(fat(5));


let espaço = '________'
console.log(espaço);
//ex6 OBJETOS

let num = [5,8,4]               // criar uma var com array com colchetes, e seus índices. Aceita tipos diferentes strings,numbers.
let amigo = {nome:'José',       // declarar objeto Chaves, , atributos , além de guardar valores guardam funcionalidades que chamamos de métodos
sexo:'M',
peso:85.4, 
engordar(p){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)                   // própria var amigo coloquei uma fç engordar
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);