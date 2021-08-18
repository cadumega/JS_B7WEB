/* document.querySelector('.texto')
document.querySelector('.texto').scrollTop   //preciso baixar o scroll para calcular
document.querySelector('.texto').scrollLeft  

window.scrollY


document.querySelector('.texto').scrollTo(0,0);

window.scrollTo(0,0);  // tela vai pra cima.
 */


// Clicou no botão, sobe a tela lá pra cima
// function subirTela() {         
//     window.scrollTo(0,0);   
// }

// passar como objeto para ter scroll suave.
function subirTela() {         
    window.scrollTo({
     top: 0 ,
     left:0,              //opcinal o left , pq não tem scroll horizontal
     behavior: `smooth` 
    });
}




// ocultar botão no scroll top.
function ocultarBotao () {
  if(window.scrollY === 0) {
        //ocultar botão
        document.querySelector('.scrollbutton').style.display = 'none';
    } else {
        //mostrar botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', ocultarBotao);