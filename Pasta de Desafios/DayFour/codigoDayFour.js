//Jogo do Número Secreto
//Número secreto
let numeroSecreto = gerarNumSecreto();
//Tentativas
let tentativas = 3;
//Texto do jogo
const textoTarefa = document.getElementById("textoTarefa");
const inicioTexto = textoTarefa.innerHTML;
//input
const chute = document.getElementById("entradaNumero");
//Botões
const chutarBot = document.getElementById("botaoEnviar");
const reiniciarBot = document.getElementById("botaoReiniciar");

//Função de verificação de número
function verficarNumero(){
    //Armazena o número escolhido em uma variável
    let escolhido = chute.value;

    //A variável tem que ser diferente de nada
    if (escolhido === ''){
        clickCor('erro', chutarBot);
        return;
    }

    //retorno de cor verde no botão
    clickCor('acerto', chutarBot);
    //inicia uma variavel texto
    let texto = '';
    //Habilita o botão de reiniciar
    reiniciarBot.removeAttribute('disabled');
    //Diminui as tentativas
    tentativas-=1;
    
    //Verificar o número escolhido e o secreto
    if(escolhido==numeroSecreto){
        texto = "<strong>Parabéns!!!</strong> <br>Você <strong>acertou</strong> o número secreto!!!";
        alterarTextoNumeroSecreto(texto);
        acertouErrou('acertou');
        desativarChute();
    }
    //Caso não acerte e ainda tenha chances
    else if(tentativas>0){
        texto = "<strong>Errou!</strong><br>O número não é "+escolhido+".<br>Você ainda tem "+tentativas+" tentativas.";
        //Verifica se o número secreto é maior ou menor que o número escolhido
        if(numeroSecreto>escolhido){
            texto+="<br>O número secreto é maior.";
        }
        else{
            texto+="<br>O número secreto é menor.";
        }
        alterarTextoNumeroSecreto(texto);
        chute.value = '';
    }
    //Caso erre e não tenha mais chances / perdeu
    else{    
        texto="Poxaaa, você <strong>perdeu</strong>...<br>O número secreto era: <strong>"+numeroSecreto+"</strong>.";
        alterarTextoNumeroSecreto(texto);
        acertouErrou('errou');
        desativarChute();
    }
}

//Adiciona uma cor de ação ao clicar (acerto ou erro)
function clickCor(classe, botao){
    botao.classList.add(classe);
    setTimeout(function(){
        botao.classList.remove(classe);
    }, 100)
}


//Reinicia todo o código e cria um novo número secreto
function reiniciar(){
    clickCor('acerto', reiniciarBot);

    chute.removeAttribute('disabled');
    chutarBot.removeAttribute('disabled');
    reiniciarBot.setAttribute('disabled', true);
    tentativas=3;
    chute.value = '';
    numeroSecreto=gerarNumSecreto();
    alterarTextoNumeroSecreto(inicioTexto);
    chute.classList.remove('acertou');
    chute.classList.remove('errou');
}

//Adiciona uma classe para o input para mudar a cor do fundo
function acertouErrou(classe){
    chute.classList.add(classe);
}

//Gera um número aleatório
function gerarNumSecreto(){
    // secreto = Math.floor(Math.random()*(10-1+1)+1);
    // console.log(secreto);
    return Math.floor(Math.random()*(10-1+1)+1);
}

//Desativa o chute
function desativarChute(){
    chutarBot.setAttribute('disabled', true);
    chute.setAttribute('disabled', true);
}

//Altera o texto principal do jogo
function alterarTextoNumeroSecreto(texto){
    textoTarefa.innerHTML=texto;
}