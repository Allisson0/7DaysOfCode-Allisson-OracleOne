let cont = 0;
let nome ="Ninguém";
let idade = 0;
let programacao = "nenhum";

function acao(){
    let entrada = document.getElementById("entrada");
    if (cont == 0){
        nome = entrada.value;
        if (nome !== ""){
            mostrarVariavel("Nome",nome);
            alterarText("Quantos anos você tem?", "Digite sua idade...");
            document.getElementById("butaoReiniciar").removeAttribute("disabled");
            cont++;
        }
        else{
            alterarText("Por favor, digite um nome.","Digite seu nome...");
        }
    }
    else if(cont == 1){
        idade = entrada.value;
        idade = parseInt(idade);
        if (isNaN(idade)){
            alterarText("Por favor, insira um número inteiro.","Digite sua idade...");
        }
        else{
            mostrarVariavel("Idade",idade);
            alterarText("Qual linguagem de programação você está estudando?", "Digite a linguagem.");
            cont++;
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
        }
        else{
            alterarText("Por favor, insira uma linguagem","Digite a linguagem.");
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


function reiniciar(){
    cont = 0;
    idade = 0;
    nome = "Ninguém";
    programacao = "nenhum";
    mostrarVariavel("Nome",nome);
    mostrarVariavel("Idade",idade);
    mostrarVariavel("Linguagem",programacao);
    document.getElementById("butaoReiniciar").setAttribute("disabled", true);
    document.getElementById("butaoEntrada").removeAttribute("disabled");
    document.getElementById("entrada").removeAttribute("disabled");
    alterarText("Qual o seu nome?", "Digite o seu nome...");
    
}