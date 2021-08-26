// Codigo Sincrono ,execução padrão do JS - executa linha a linha, só vai para a proxima quando é finalizada
let nome = 'carlos';
let sobrenome = 'lacerda';
let completo = nome+' '+sobrenome;

// Codigo Assincrono -
// obs: pesquisar sobre lazyload que é uma otimização a mais do assincrono

let nome = 'carlos';
let sobrenome = 'lacerda';

let temperatura = Maquininha.pegarTemperatura();       // ASSINCRONA ,nao é algo instanteneo, precisa de um tempo para pegar a temperatura para depois me retornar. Nao espero terminar essa linha para ir para a proxima.
let completo = nome+' '+sobrenome;