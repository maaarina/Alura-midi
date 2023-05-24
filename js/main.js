function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //recebe a lista com todas as teclas do Alura Fone


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]; //acessa a lista    
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    //====== acessibilidade (navegação pelo teclado)

    const listaDeTecla = document.querySelectorAll('input[type=button]');

    for (let indice = 0; indice < listaDeTecla.length; indice++) {
        const tecla = listaDeTecla[indice];

        tecla.onkeydown = function (evento) { 

        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        } // se evento.code (o código do evento onkeydown) for igual a "Enter" ou for igual a "Space", adicione a classe ativa no elemento tecla,
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa'); //remove a classe logo após deixamos de pressioná-la
        }
    }
}
