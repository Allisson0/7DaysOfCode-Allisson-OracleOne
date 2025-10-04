//Apresentação
//Botões de apresentação do texto
const botaoFor = document.getElementById("botaoFor");
const botaoWhile = document.getElementById("botaoWhile");
const botaoDoWhile = document.getElementById("botaoDoWhile");
const botaoRandom = document.getElementById("botaoRandom");
//Texto dos botões
const retornoBotao = document.getElementById("botaoEscolhido");
//Botão escolhido
let escBot = 0;

//Seleção do tópico
//For
function pressFor(){
    if (escBot!=1){
        retornoBotao.innerHTML = "O <strong>For</strong> é composto pela seguinte estrutura:<br>for(variável de controle; condição para loop; incremento da variável de controle){ }<br>Assim, enquanto a condição do 'for' for verdadeira, o programa realizará toda a estrutura de código dentro dele.<br>Outras linguagens de programação podem ter sintaxes difentes para a estrutura do for. É recomendado verficar a documentação da linguagem."
        escBot=1;
        selecionar(botaoFor);
    }
    //Desseleciona o tópico
    else{desselecionar(botaoFor)}    
}

//While
function pressWhile(){
    if(escBot!=2){
        retornoBotao.innerHTML = "O <strong>While</strong> é composto pela seguinte estrutura:<br>while(condição){ }<br>Onde ele apenas impõe uma verificação da condição antes do início do código, e enquanto ela for verdadeira, o programa executará toda a estrutura presente dentro dele. Geralmente a condição é dada por um valor que será incrementado, decrementado ou alterado durante a estrutura do código. Mas também pode ser apenas 'True' para rodar indefinidamente. <br>Outras linguagens de programação podem ter sintaxes difentes para a estrutura do for. É recomendado verficar a documentação da linguagem."
        escBot=2;
        selecionar(botaoWhile);
    }
    //Desseleciona o tópico
    else{desselecionar(botaoWhile)}    
}

//Do While
function pressDoWhile(){
    if(escBot!=3){
        retornoBotao.innerHTML = "O <strong>Do While</strong> é composto pela seguinte estrutura: <br>do:<br>while(condição)<br>Onde ele realiza ao menos uma vez a estrutura presente dentro dele, e ao final faz uma verificação de uma condição, e se for verdadeira, fará realizará a condição novamente. É semelhante ao While tradicional, porém ele faz pelo menos uma vez a estrutura dentro dele. <br>Outras linguagens de programação podem ter sintaxes difentes para a estrutura do Do While, ou mesmo não o ter. É recomendado verficar a documentação da linguagem."
        escBot=3;
        selecionar(botaoDoWhile);
    }
    //Desseleciona o tópico
    else{desselecionar(botaoDoWhile)}    
}

//Randomização
function pressRandom(){
    if(escBot!=4){
        retornoBotao.innerHTML = "<strong>Randomização</strong><br>A randomização é o processo de gerar um número aleatório em um intervalo predefinido pelo programador.<br>Todas as linguagens têm sua forma de realizar a randomização de números. O JavaScript, por exemplo, usa da biblioteca integrada 'Math.random' onde gera um número aleatório entre 0 e 1.<br>Podemos controlar o intervalo deste número com uma multiplicação simples: <br>Math.random*(número máximo - número mínimo) + número mínimo. <br>Assim ele multiplicará o valor pelo número máximoe somará com o mínimo e o +1 incluirá o número máximo no intervalo. E usamos Math.floor para reduzir ele para apenas os números inteiros dele.<br>Math.floor(Math.random()*(número máximo - número mínimo + 1)+número mínimo)<br>É altamente recomendado verificar a documentação da linguagem utilizada para encontrar a forma de usar a randomização na linguagem."
        escBot=4;
        selecionar(botaoRandom);
    }
    //Desseleciona o tópico
    else{desselecionar(botaoRandom)}    
}

//Remove a cor do botão desselecionado
function desselecionar(botao){
    retornoBotao.innerHTML=""; escBot=0;
    botao.classList.remove('selecionado');
}

//Adiciona cor ao botão selecionado, e tira dos outros
function selecionar(botao){
    let botoes = [botaoFor, botaoWhile, botaoDoWhile, botaoRandom]
    for(let i = 0; i<4; i++){
        if(botoes[i] == botao){
            botoes[i].classList.add('selecionado');
        }
        else{
            botoes[i].classList.remove('selecionado');
        }
    }
}