//Criação das constantes dos elementos que serão utilizados
const botaoEsquerdo = document.getElementById("botaoEsquerdo");
const botaoDireito = document.getElementById("botaoDireito");
const textoPrincipal = document.getElementById("textoEscolha")
const input = document.getElementById("inputFormacoes");
const botaoReiniciar = document.getElementById("botaoReiniciar");
const lista = document.getElementById("listaFormacoes");

//Criação das variáveis utilizadas durante o processo
let cont = 0;
let tipoDeDev = '';
let tecnologias = '';
let fullstack = true;

//Funções do botão esquerdo
function BotaoEsquerdo(){
    //Escolhas
    if (cont == 0){
        // Escolheu Front-End
        tipoDeDev = 'Front-End';
        cont++;
        let texto = "Você quer aprender <strong class='escopo__escolhas__texto__strong'>React</strong> ou <strong class='escopo__escolhas__texto__strong'>Vue</strong>?";
        alterarTextos(texto, 'React', 'Vue');
    }
    else if (cont == 1){
        if(tipoDeDev == 'Front-End'){
            // Escolheu React
            tecnologias = 'React';
            cont++;
        }
        else if(tipoDeDev == 'Back-End'){
            // Escolheu C#
        tecnologias = 'C#';
        cont++;
        }
        let texto = "Você quer se <strong class='escopo__escolhas__texto__strong'>especializar</strong> ou se tornar <strong class='escopo__escolhas__texto__strong'>fullstack</strong>?";
        alterarTextos(texto, 'Especializar', 'Fullstack');
    }
    else if(cont==2){
        // Escolheu seguir se especializando
        fullstack = false;
        cont++;
        texto = 'Quais tecnologias você gostaria de conhecer ou de se especializar?';
        alterarTextos(texto, 'Adicionar', 'Finalizar');
        input.style.display='flex';
    }
    else if(cont==3){
        // escolheu adicionar na lista.
        let tec = input.value;
        if (tec!==''){
            //dá um efeito de piscar em verder
            botaoEsquerdo.classList.add('piscarGreen');
            setTimeout(function(){
                botaoEsquerdo.classList.remove('piscarGreen');
            }, 100);
            var listaTecnologia = document.createElement('li');
            listaTecnologia.textContent=tec;
            listaTecnologia.classList.add('escolha__escolhas__lista__conteudo');
            lista.appendChild(listaTecnologia);
            input.value = '';
        }        
        else{
            //dá um efeito de piscar em vermelho
            botaoEsquerdo.classList.add('piscarRed');
            setTimeout(function(){
                botaoEsquerdo.classList.remove('piscarRed');
            }, 100);
        }
    }
}

//Funções do botão direito
function BotaoDireito(){
    //Escolhas
    if (cont == 0){
        // Escolheu Back-End
        tipoDeDev = 'Back-End';
        cont++;
        let texto = "Você quer aprender <strong class='escopo__escolhas__texto__strong'>C#</strong> ou <strong class='escopo__escolhas__texto__strong'>Java</strong>?";
        alterarTextos(texto, 'C#', 'Java');
    }
    else if (cont == 1){
        if(tipoDeDev == 'Front-End'){
            // Escolheu Vue
            tecnologias = 'Vue';
            cont++;
        }
        else if(tipoDeDev == 'Back-End'){
            // Escolheu Java
        tecnologias = 'Java';
        cont++;
        }
        let texto = "Você quer se <strong class='escopo__escolhas__texto__strong'>especializar</strong> ou se tornar <strong class='escopo__escolhas__texto__strong'>fullstack</strong>?";
        alterarTextos(texto, 'Especializar', 'Fullstack');
    }
    else if(cont==2){
        // Escolheu se tornar fullstack
        fullstack = true;
        cont++;
        texto = 'Quais tecnologias você gostaria de conhecer ou de se especializar?';
        alterarTextos(texto, 'Adicionar', 'Finalizar');
        input.style.display='flex';
    }
    else if(cont==3){
        // Escolheu finalizar.
        if(lista.children.length==0){
            var listaTecnologia = document.createElement('li');
            listaTecnologia.textContent='Nenhuma outra tecnologia.';
            listaTecnologia.classList.add('escolha__escolhas__lista__conteudo');
            lista.appendChild(listaTecnologia);
            
        }
        //Retorno em texto das informações adquiridas
        if (fullstack){
            textoPrincipal.innerHTML = 'Você escolheu ser <strong class="escopo__escolhas__texto__strong">' + tipoDeDev + '</strong>, estudar mais sobre <strong class="escopo__escolhas__texto__strong">' + tecnologias + '</strong> e <strong class="escopo__escolhas__texto__strong">se tornar fullstack</strong>. As suas demais tecnologias que quer aprender são:';            
            textoPrincipal.style.fontSize = '1.7rem';
        }
        else{
            textoPrincipal.innerHTML = 'Você escolheu ser <strong class="escopo__escolhas__texto__strong">' + tipoDeDev + '</strong>, estudar mais sobre <strong class="escopo__escolhas__texto__strong">' + tecnologias + '</strong> e <strong class="escopo__escolhas__texto__strong">continuar se especializando na área</strong>. As suas demais tecnologias que quer aprender são:'
            textoPrincipal.style.fontSize = '1.7rem';
        }
        
        //Mostra o botão reiniciar e esconder botões:
        input.style.display='none';
        input.value = '';
        botaoDireito.style.display = 'none';
        botaoEsquerdo.style.display = 'none';
        botaoReiniciar.style.display = 'inline-block';
        
    }
}

//Função de alteração de texto de botões e texto principal
function alterarTextos(texto, leftButton, rightButton){
    textoPrincipal.innerHTML = texto;
    botaoEsquerdo.innerHTML = leftButton;
    botaoDireito.innerHTML = rightButton;
}

//Reinicia o jogo inteiro
function reiniciar(){
    cont = 0;
    texto = 'Você quer seguir para a área de <strong class="escopo__escolhas__texto__strong">Front-End</strong> ou de <strong class="escopo__escolhas__texto__strong">Back-End</strong>?'
    alterarTextos(texto, 'Front-End', 'Back-End');
    // Reinicia o formato dos botões.
    botaoDireito.style.display = 'inline-block';
    botaoEsquerdo.style.display = 'inline-block';
    botaoReiniciar.style.display = 'none';
    textoPrincipal.style.fontSize = '1.5rem';
    lista.innerHTML = '';
}