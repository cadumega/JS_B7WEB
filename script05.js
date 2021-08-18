function azul() {
  limpar();
  document.getElementById('titulo').classList.add('azul')
}

function vermelho() {
  limpar();
  document.getElementById('titulo').classList.add('vermelho')

}

function verde() {
  limpar();
  document.getElementById('titulo').classList.add('verde')

}


function limpar() {
  document.getElementById('titulo').classList.remove("azul");
  document.getElementById('titulo').classList.remove("vermelho");
  document.getElementById('titulo').classList.remove("verde");
}

function removeAll() {
  document.getElementById('titulo').classList.remove()
}

//_________

function mostrarCodigo(element) {
  element.style.display = 'none';
  document.getElementById("codigo").style.display = "block";
}
function saiuDoCodigo() {
  document.getElementById("codigo").style.display = "none";
  document.getElementById("btn-code").style.display = "block";
}

//Adição de classe ao título
//O objeto esta verde uma substitui a outra, prevalece a ultima

// Criei uma fç para limpar

//alterar o estado do elemento, add style substituindo o display none