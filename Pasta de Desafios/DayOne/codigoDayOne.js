let num1;
let num2;
let valorInteiro1 = false;
let valorInteiro2 = false;
let preench1 = false;
let preench2 = false;
const corBotaoOcioso = "#F0F8FF";
const corBotaoSelec = "#33A1E0";

function esqString(){
    preench1 = true;
    valorInteiro1 = false;
    trocarCor("esquerdaString", "esquerdaInteiro", corBotaoSelec, corBotaoOcioso);
}

function esqInt(){
    preench1 = true;
    valorInteiro1 = true;
    trocarCor("esquerdaString", "esquerdaInteiro", corBotaoOcioso, corBotaoSelec);
}

function dirString(){
    preench2 = true;
    valorInteiro2 = false;
    trocarCor("direitaString", "direitaInteiro", corBotaoSelec, corBotaoOcioso);
}

function dirInt(){
    preench2 = true;
    valorInteiro2 = true;
    trocarCor("direitaString", "direitaInteiro", corBotaoOcioso, corBotaoSelec);
}

function tipoValor(numero, inteiro){
    let numeroInput = String(document.getElementById(numero).value);

    if(numeroInput == ""){
        return "";
    }

    if(inteiro == true){
        numeroInput = parseInt(numeroInput);
    }
    return numeroInput;
}

function trocarCor(id1, id2, cor1, cor2){
    let botaoString = document.getElementById(id1);
    let botaoInt = document.getElementById(id2);
    botaoString.style.backgroundColor = cor1;
    botaoInt.style.backgroundColor = cor2;
}

function verificaPreenchimento(numero1, numero2){
    if(numero1 == "" || numero2 == ""){
        escrever("Por favor, insira valores nos campos, antes de comparar.");
        return false;
    }
    if(preench1 == false || preench2 == false){
        escrever("Por favor, defina os tipos das variaveis.");
        return false;
    }
    return true;
}

function comparacao(){
    if (num1 === num2){
        return "O tipo de variável é <strong class='positivo'>igual</strong> e o valor <strong class='positivo'>também</strong>.";
    }
    else if(num1 == num2){
        return "O tipo de variável é <strong class='negativo'>diferente</strong>, mas o valor é <strong class='positivo'>igual</strong>.";
    }
    else if(typeof num1 == typeof num2){
        return "O tipo de variável é <strong class='positivo'>igual</strong>, mas o valor é <strong class='negativo'>diferente</strong>.";
    }
    else{
        return "Os valores e os tipos das variáveis são <strong class='negativo'>diferentes</strong>.";
    }
}

function escrever(texto){
    let retorno = document.getElementById("resultado");
    retorno.innerHTML = texto;
}

function comparar(){
    num1 = tipoValor("num1", valorInteiro1);
    num2 = tipoValor("num2", valorInteiro2);

    if(verificaPreenchimento(num1, num2)){
        escrever("");
        let comparacaoResultado = "";
        comparacaoResultado = comparacao();
        escrever(comparacaoResultado);
    }
}