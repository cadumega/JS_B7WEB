/* 
similar ao if , mas com 3 partes distintas
1- primeiro criar uma var. auxiliar , qts vezes ira precisar rodar o codigo
2- efetivamente fazer uma condição, em qt for satisfeita ele irá repetir o codigo, até q não seja mais satisfatória
3- incrementação

FOR LOOP
FOR LOOP ARRAY

ex.Fazer uma listagem de 1 a 10

let texto ='';

for(let i = 1; i <= 10; i++) {
    texto = texto + i + '<br>';
}

document.getElementById('demo').innerHTML = texto;

ex2 de Listagem
*/ 

let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Honda' , 'Corolla'];

let html = '<ul>';

for(let i in carros) {      //percorre uma array
    html += '<li>' +carros[i] +'</li>';
}


html += '</ul>';

document.getElementById('demo').innerHTML = html;
