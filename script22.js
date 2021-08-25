let info = ['Carlos Lopes', 'Carlos', 'Lopes', '@cadu'];

let [ nomeCompleto, nome, sobrenome, instagram] = info;
// let [nomeCompleto, , ,instagram] // Deixar vazio se não quiser puxar o item da array. Economizar memória. Pulo o item da array.


console.log( nomeCompleto, nome, sobrenome, instagram);

// Desconstrução da array é de acordo com a ordem que foi criado.


let [nome2, sobrenome2, idade=90] =['Bonieky', 'Lacerda']
console.log(nome2, sobrenome2, idade);


function criar() {
  // let a = [1,2,3];
  // return a;
  return [1,2,3]           // + descontruido
}

// let numeros = criar();
// let [a,b,c] = numeros;

let [a,b,c] = criar();   // rodar a fç pois já retorna uma array

console.log(a,b,c);


// funciona para objetos também