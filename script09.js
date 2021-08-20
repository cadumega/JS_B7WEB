// Qd você tem um valor especifico e a partir desse valor, fazer várias condicionais diferentes.
// Dia da semana ou se hoje é final de semana.

let dia = 3;
let diaNome = '';
       // passa apenas a var. q vc quer fazer as condicionais.
switch(dia)  {
  case 1:
    diaNome = 'Segunda-Feira';
    break;
  case 2:
    diaNome = 'Terça-Feira';
    break;
  case 3:
      diaNome = 'Quarta-Feira';
      break;
  case 4:
      diaNome = 'Quinta-Feira';
      break;
  case 5:
      diaNome = 'Sexta-Feira';
      break;
  case 6:
      diaNome = 'Sábado';
      break;
  case 7:
      diaNome = 'Domingo';
      break;
}

// switch(diaFDS) {
//   case9:
//   case10:
//     diaNome = 'Final de semana';
//     break;
//   default:
//     diaNome = 'Dia de semana';
//     break;
// }

document.getElementById('dia').innerHTML = 'Hoje é:'+diaNome;



