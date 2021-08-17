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



function aparecer(){
  // caso o scroll esteja em posição maior que 20, ele entra no if
  if(window.scrollY > 20){
      //quando entrar no if, troca o atributo do display para block, assim ficará visível.
      document.querySelector('.scrollbutton').setAttribute('style', 'display:block');
  } else {
      // quando não atender a condição do if, então ele esconde novamente o scrollbutton
      document.querySelector('.scrollbutton').setAttribute('style', 'display:none'); 
  }
}

/*
O setInterval aplica um tempo para uma função
assim o if ficará rodando a cada 1s e validando
a condição.
*/

setInterval(aparecer, 1);
