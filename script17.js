/* 
Criar diferentes tipos de Timers , criar um código específico em X em X horas. 
Ou esperar depois de um tempo e rodar.
Qualquer tipo de evento que executa simultânea vezes ou retarda.
*/

//fç criada, exibir hora atual, com hora minuto e segundo na tela.
function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}

// Criando um timer, com intervalo conforme os parametros q escolhi.

let timer = setInterval(showTime,1000);

// 6:30 parei