/* 
Criar diferentes tipos de Timers , criar um código específico em X em X horas. 
Ou esperar depois de um tempo e rodar.
Qualquer tipo de evento que executa simultânea vezes ou retarda.
*/

let timer;

//fç de controles
function comecar() {
     timer = setInterval(showTime, 10);
}

function parar() {
    clearInterval(timer);       // Limpar intervalo, e passo o parametro a var do timer. Preciso colocar a var no contexto global e não local do contexto interno da fç acima.
                                // Posso usar agora o timer tanto no comecar quanto no parar.
}

function rodar() {
    setTimeout(function() {
        document.querySelector  // 3:28 !!!!!!!!!!!!!!!!!!!!
    })
}

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

// let timer = setInterval(showTime,1000); // IRA PARA DENTRO DA FC COMECAR

