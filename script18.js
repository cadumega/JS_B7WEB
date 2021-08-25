function rodar() {
  timer = setTimeout(function() {
      document.querySelector('.demo').innerHTML = ' Rodou!';
  }, 2000);
}

function parar() {      // parar antes de rodar, antes do timer chegar em 0
  clearTimeout(timer);    // para o timer
}


/*
SetTimeout espera um tempo e roda a função
SetInterval de x em x tempo roda a função, a não ser que vc pare a fç
*/