let webhook = "http://localhost:5678/webhook/animacao-css";

async function CliqueiNoBotao() {
    let textoInput = document.querySelector('.input-animacao').value;
    let codigo = document.querySelector('.area-codigo');
    let areaResultado = document.querySelector('.area-resultado');
    let botao = document.querySelector('.botao-magica');

    botao.disabled = true;
    botao.textContent = "Criando...";
    botao.style.background = "#888888";

    let resposta = await fetch(webhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pergunta: textoInput })
    });

    let resultado = await resposta.json();

    let info = JSON.parse(resultado.resposta);

    codigo.innerHTML = info.code;
    areaResultado.innerHTML = info.preview;

    document.head.insertAdjacentHTML('beforeend', "<style>" + info.style + "</style>");

    botao.disabled = false;
    botao.textContent = "Criar Mágica";
    botao.style.background = "#37e359";

}