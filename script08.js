//Toggle é quando executo algo e retono depois a origem

// function menuToggle() {
//     let menuArea = document.getElementById('menu-area');

//     if(menuArea.classList.contains('menu-opened') == true) {
//         menuArea.classList.remove('menu-opened');
//     } else {
//       menuArea.classList.add('menu-opened');
//     }
// }

//Salvar em uma var para usar com mais facilidade.
//Uso como eu quiser esse menuArea, menu-opened esta
// se tiver a class menu-opened iremos tirar, caso contrário adicionar.

2° Forma:
function menuToggle() {
  let menuArea = document.getElementById('menu-area');

  if(menuArea.style.width == '200px') {
    menuArea.style.width = '0px';
  } else {
    menuArea.style.width = '200px';
  }
}


//3° Forma:

// function menuToggle() {                         //enu Toggle, existe essa função no javascript que ela adiciona e remove a classe, clicando uma vez ela adiciona e clicando novamente ela remove!
//   let menuArea = document.querySelector(".menu-area");
//   menuArea.classList.toggle('menu-opened');
// }