// Promises - resultado temporario que recebemos, daqui algum tempo vamos ter nunca o resultado ou ter o resultado ou problema.
function pegarTemperatura() {
    return new Promise(function(resolve,reject) {
        console.log("pegando temperatura...");

      setTimeout(function(){                          // Executa a funcao resolve após 2seg. Obrigatorio ter resolve,reject.
          resolve('40 na sombra')
      }, 2000)
    })
}


// Usando a promise
console.log('código antes');

let temp = pegarTemperatura();              // console.log(temp);  //pending      // EXECUCAO DE FÇ

console.log('código durante');

temp.then(function(resultado) {             // qd terminar faça x. pega a temp e então executa o callback, faço o q eu quiser com resultado
    console.log(`Temperatura: ${resultado}`);
});

temp.catch(function(error) {
  console.log('Eita, deu erro!');
});

console.log('código depois');
// Fica pronto para receber o resultado positivo e negativo. CRIEI 2 CALLBACKS. Qd crio uma requisição , preciso esperar ela acabar.



/* ______________

A ideia da promise é que ela seja uma estrutura de dados para que você consiga manipular dados que não existem ainda. Um exemplo de dado que não existe ainda seria a resposta de uma API como o via cep.
Então a função que você passa no construtor de Promise é a função que vai gerar esse dado, e como você não tem certeza que o dado existe, ou simplesmente como dito anteriormente não possui esse dado ainda, mas vai ter em algum momento futuro.
A promise te dá duas funções: a resolve, e a reject. Assim você pode fazer o que for, demorar o quanto precisar, que quando você tiver o dado em mãos, você chama a resolve passando esse dados, e o resolve vai notificar a promise que esse dado agora existe, e portanto pode ser manipulado, então ele vai e salva esse dado internamente na promise.
Só que perceba que o dado foi guardado na promise atraves do resolve, mas você não fez nada com ele, só guardou na promise. Como você faz para manipular esse dado?
Você não poderia simplesmente fazer algo como:
const secretNumber = new Promise((resolve) => {
  // Agora a const secretNumber possui o valor 2
  resolve(2);
});

// secretNumber não tem uma propriedade value, mas vamos fingir que tem
const number = secretNumber.value;
const otherNumber = 3;
console.log(number + otherNumber);
  
Porque nesse caso o resolve foi chamado quase instantaneamente, mas ele poderia ter levado 2 minutos para responder, e enquanto esses dois minutos passavam, o código continuaria sendo executado e quando a soma fosse executada, number ainda não existiria e o seu código daria errado.
Então como podemos fazer para que o JS espere até o valor realmente existir na promise, para que então nós possamos manipula-lo?
Simples, podemos fazer assim como no construtor, uma função que é passada para a promise e quando o valor existir, você chama ela e passa esse valor como parâmetro dela. E é daí que existe o método then das promises, ele aceita uma função e só executa ela quando o valor estiver disponível (ou seja o resolve for chamado na promise).
Por isso, agora que entendemos como a promise funciona, vamos revisar como se dá o fluxo para que a função que recebe o resultado no then, receba o valor passado no resolve.
A promise é tipo uma caixa, uma variável, etc, ela é um lugar onde nós guardamos um valor, e ele pode existir ou não, por isso nós temos que avisar ela se o valor já existe ou não, e para conseguir notificar a promise que o valor está pronto e ela poder guardar o valor dentro dela, nós chamamos o resolve.
Depois do resolve ser chamado, a promise pega o valor que você passou pro resolve, e guarda dentro dela, e ai ela chama a função registrada no then (que você chamou de função resultado na sua pergunta), e então repassa esse valor que ela guardou internamente para essa função registrada na forma do parametro que essa função recebe.
Em código ficaria +- assim:
class Caixa {
  constructor(pegarValor) {
    this.valor = null;
    this.valorJaFoiManipulado = false;

    const guardarValor = (valor) => {
      this.valor = valor;

      if (!this.valorJaFoiManipulado && this.manipuladorDeValor) {
        this.manipuladorDeValor(this.valor);
      }
    };


  */ 