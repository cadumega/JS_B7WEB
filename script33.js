// Fç JS que você cria , que vc manda essa função para uma outra execução ,geralmente execução assincrona
function alertar(){
    alert('Opa,tudo bem?')
}



let nome = 'Carlos';
setTimeout(alertar, 2000);              // Callback , executa fç, qd o resultado chegar vc retorna para fç, executada posteriormente após determinado resultado.
let sobrenome = 'Lopes';
console.log(`Nome Completo = ${nome} ${sobrenome}`);