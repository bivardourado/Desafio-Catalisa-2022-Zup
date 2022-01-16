const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nome = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const imagem2 = document.querySelector('#imagem2');
const nome2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');

const imagem3 = document.querySelector('#imagem3');
const nome3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#status3');


traduzirCondicao = (data) => {
    if (data.status == 'unknown') {
        return 'Não sabemos';
    } else if (data.status == 'Alive') {
        return 'Sim';
    } else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
        let numeroAleatorio = gerarValorAletorio();
        let numeroAleatorio2 = gerarValorAletorio();
        let numeroAleatorio3 = gerarValorAletorio();