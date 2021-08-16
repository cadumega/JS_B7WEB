function trocarImagem (filename, animalName) {      //filename como param
    document.querySelector('.imagem').setAttribute('src', 'imagens/'+filename);   //achei a imagem
    document.querySelector('.imagem').setAttribute('data-animal',animalName);
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+ animal)   // salvei a variavel animal, e quero mostrar
}
// Com setAttribute eu troco, insiro um valor em atributo
// com getAttribute eu pego o atributo.
// Extremamente util quando utilizamos formulários., ou ocultar as informações da tela.