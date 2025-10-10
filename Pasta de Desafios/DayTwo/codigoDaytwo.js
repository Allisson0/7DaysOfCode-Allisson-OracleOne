let cont = 0;
let nome ="Ninguém";
let idade = 0;
let programacao = "nenhum";

const botaoEntrada = document.getElementById("butaoEntrada");
const botaoReiniciar = document.getElementById("butaoReiniciar");

function acao(){
    let entrada = document.getElementById("entrada");
    if (cont == 0){
        nome = entrada.value;
        if (nome !== ""){
            mostrarVariavel("Nome",nome);
            alterarText("Quantos anos você tem?", "Digite sua idade...");
            document.getElementById("butaoReiniciar").removeAttribute("disabled");
            clickFalse(botaoEntrada, 'true');
            cont++;
        }
        else{
            alterarText("Por favor, digite um nome.","Digite seu nome...");
            clickFalse(botaoEntrada, 'false');
        }
    }
    else if(cont == 1){
        idade = entrada.value;
        idade = parseInt(idade);
        if (isNaN(idade)){
            alterarText("Por favor, insira um número inteiro.","Digite sua idade...");
            clickFalse(botaoEntrada, 'false');
        }
        else{
            mostrarVariavel("Idade",idade);
            alterarText("Qual linguagem de programação você está estudando?", "Digite a linguagem.");
            cont++;
            clickFalse(botaoEntrada, 'true');
        }
    }
    else if(cont == 2){
        programacao = entrada.value;
        if(programacao!==""){
            mostrarVariavel("Linguagem",programacao);
            texto = "Olá <strong class='escopo__verVariavel__enfase'>"+nome+"</strong>, você tem <strong class='escopo__verVariavel__enfase'>"+idade+"</strong> anos e já esta aprendendo a programar em <strong class='escopo__verVariavel__enfase'>"+programacao+"</strong>.";
            alterarText(texto,"Desabilitado");
            entrada.setAttribute("disabled",true);
            document.getElementById("butaoEntrada").setAttribute("disabled", true);
            clickFalse(botaoEntrada, 'true');
        }
        else{
            alterarText("Por favor, insira uma linguagem","Digite a linguagem.");
            clickFalse(botaoEntrada, 'false');
        }
    }
}

function alterarText(texto, placeHolder){
    let caixaTexto = document.getElementById("Texto");
    let entrada = document.getElementById("entrada");
    caixaTexto.innerHTML = texto;
    entrada.placeholder = placeHolder;
    entrada.value = '';
}

function mostrarVariavel(talVariavel, amostragem){
    let textoVariavel = document.getElementById(talVariavel);
    textoVariavel.innerHTML=amostragem;
}

function clickFalse(botao, cor){
    botao.classList.add(cor);
    setTimeout(function(){botao.classList.remove(cor)}, 100);
}

function reiniciar(){
    cont = 0;
    idade = 0;
    nome = "Ninguém";
    programacao = "Nenhuma";
    mostrarVariavel("Nome",nome);
    mostrarVariavel("Idade",idade);
    mostrarVariavel("Linguagem",programacao);
    clickFalse(botaoReiniciar, 'true');
    //Dar tempo da troca de cor ocorrer
    setTimeout(function(){
        document.getElementById("butaoReiniciar").setAttribute("disabled", true);
    },100);
    document.getElementById("butaoEntrada").removeAttribute("disabled");
    document.getElementById("entrada").removeAttribute("disabled");
    alterarText("Qual o seu nome?", "Digite o seu nome...");
}