function mostrarSaudacao() {
   
    const nome = "Oii, sou a Juliana!";
    

    var saudacao;
    
    const agora = new Date();
    const horas = agora.getHours();
    const diasDaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    const diaSemana = diasDaSemana[agora.getDay()];
    
    if (horas < 12) {
        saudacao = "Bom Dia!";
    } else if (horas < 18) {
        saudacao = "Boa Tarde!";
    } else {
        saudacao = "Boa Noite!";
    }
    
    const saudacaoContainer = document.createElement("div");
    saudacaoContainer.setAttribute("class", "saudacao-content");

    const mensagem = document.createElement("p");
    mensagem.innerHTML = `${nome}<br>${saudacao}<br> Hoje é ${diaSemana}.`;
    saudacaoContainer.appendChild(mensagem);

    const saudacaoElemento = document.getElementById("saudacao");
    saudacaoElemento.appendChild(saudacaoContainer);

    document.getElementById("overlay").style.display = "block";
    document.getElementById("dialog").style.display = "block";
}

function fecharDialog() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("dialog").style.display = "none";
}

window.onload = mostrarSaudacao;
