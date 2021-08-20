let lista = document.querySelectorAll('.lista');

for (let i in lista) {
    lista[i].style.color = 'royalblue';
}

document.querySelector('#titulo').innerHTML = 'Mudando o titulo';


// document.querySelector('body').style.color = 'gray'

// Para selecionar com o  queryselector  de 1 item específico de uma lista por exemplo tem uma ul com 5 li ...
// document.querySelector("ul > li:nth-child(3)");