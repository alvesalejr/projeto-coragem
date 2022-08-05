/* 

Objetivo  - Quando clicarmos na seta de avançar mostrar o próximo cartão;
    Passo 1 - Pegar o Elemento HTML da Seta;
    Passo 2 - Identificar o clique na seta avançar;
    Passo 3 - Aparecer o cartão anterior;

*/

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cards");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

//BTN AVANÇAR;
btnAvancar.addEventListener('click', function (){
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);

});

// BTN VOLTAR;
btnVoltar.addEventListener('click', function (){
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});