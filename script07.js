
// Listagem nomeada objeto , listagem numerada array

//array
let carrosNovos = [
  'Toro',
  'BMW',
  'Audi',
  'Mercedes'
];

//objeto
let carro = {          // criando objeto e as suas propriedades nomeadas
  nome:'Fiat',
  modelo:'Toro',
  peso:'800kg',
  ligado: false,
  ligar:function () {           // prop ligar
      this.ligado = true;       //qd a fç ligar for executada, o this irá substituir para true o this.ligado.
       console.log('Vrum Vrum! Carro Ligou!');
      // console.log("Ligando o "+this.modelo);
  },
  acelerar:function() {
    if(this.ligado ==true) {
        console.log('Riiiiihihi Partiu!!!');
    } else {
      console.log(this.nome+" "+this.modelo+" não pegou!");
    }
  }
};

carro.ligar();
carro.acelerar();


//Criando array [] com propriedades nomeadas de Objetos {}
let carrosUsados = [
  {nome:'Renault', modelo:'Duster'},
  {nome:'Chevrolet', modelo:'Spin'},
  {nome:'Wolks', modelo:'Virtus'}
]

console.log(carrosUsados[2]);  //acessar informações de Wolks
console.log(carrosUsados[2].nome);  //acessar nome Wolks


// console.log("Modelo:"+carro.modelo );

//this só existe dentro, dentro do meu objeto.
// Resumidamente: This é como se fosse o próprio objeto (elemento). 

//CRIEI OBJETOs

// console.log(carro['nome']);  //ou
// console.log(carro.nome);

// document.getElementById('titulo').style.display= "block";