//  Função que retorna outra função

// Peguei fn1 processei o valor, e depois passei para fn2. COMPOSICAO DE FUNCAO

function composicao(fn1, fn2,fn3) {
    return function(valor) {
        fn3(fn2(fn1(valor)))
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')         // separo as letra em espaço em branco e dpeois junto
}

const exagerado = composicao(
    gritar, 
    enfatizar, 
    tornarLento,  
) 

console.log(exagerado('cuidado com o buraco'));
console.log(exagerado('pare'));

// O problema é que esta amarrado em 3 funções

//ex2

//operador rest   , composicao flexivel, os valores sao passados

function composicao(...funcoes) {
    return function(valor) {
        return funcoes.reduce((acc,fn) => {
            return fn(acc)
        },valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')         // separo as letra em espaço em branco e dpeois junto
}

const quaseExagerado = composicao(
    gritar, 
    enfatizar, 
) 

console.log(exagerado('cuidado com o buraco'));
console.log(quaseExagerado('pare'));