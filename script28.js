let telefone = '5';

console.log(telefone.padEnd(9,'*' ));        //qts caracteres o item irá ter, caso tenha - ira preencher com simbolo ou o q vc quiser.

console.log(telefone.padStart(9,'*' ));       

let cartao = '123412341234';

let lastDigits = cartao.slice(-4);
let cartaoMascarado = lastDigits.padStart(16,'*');

console.log('Este é o seu cartão? ' + cartaoMascarado);    // Termos de segurança



// let lastDigits = cartao.slice(0,3);
// let cartaoMascarado = lastDigits.padEnd(16,'*');