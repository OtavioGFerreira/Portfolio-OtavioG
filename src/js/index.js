// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML

const abas = document.querySelectorAll(".aba");

// passo 2 - fazer a troca de abas selecionadas

abas.forEach(aba => {

    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return
        };

        selecionarAba(aba)

        //passo 3 - esconder e mostrar  conteúdo 

        mostrarInformacoesDaAba(aba)

        
        
    });
});


function selecionarAba(aba) {
// passo 2 - fazer a troca de abas selecionadas
    const abaSelecionada = document.querySelector(".aba.selecionado");

        abaSelecionada.classList.remove("selecionado");
        aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){
 //passo 3 - esconder e mostrar  conteúdo 
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");
        
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
}