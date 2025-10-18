//Declaração de constantes - Tela e texto tela ocioso
const SCREEN = document.getElementById("telaCalculadora");
const initScreen = "Calc. 3.000";

//Variavel de verificação se o último digito foi 
// uma expressão ou se existe na secção o ponto
let hasDouble = false;
let hasAction = false;

//Listas de ações - números e expressões
let number = [''];
let action = [''];

//Texto para tela
let textNumberAction = "";

//Secção atual
let section = 0;

//Função de digitar número - recebe o botão clicado para verificar valor
function digitar(button){

    //Se há uma ação no momento da digitação
    //cria uma nova secção
    if(hasAction){
        section++;
        number.push('');
        action.push('');
        hasDouble= false;
    }

    //ação não é o último digito digitado
    hasAction = false;

    //Botão escolhido
    let choose = button.value;

    //Verifica se a escolha é 0 e se for 0 e já houver um zero em secção, impede
    //a ação
    if (choose == '0' && number[section] == "0") {
        return;
    }

    //Adiciona o número escolhido na secção do número
    number[section] += choose;

    //Função de atualização da tela
    updateScreen();
}

//Digita uma expressão dada pelo botão
function acao(button){

    //Se houver pelo menos um número na lista de número da secção atual,
    //insere a expressão
    if (number[section].length > 0) {
        hasAction = true;
        action[section] = button.value;      
        updateScreen();
    } 
}

//Função de pontuar número
function pontuar(button){
    let point = button.value;

    //Se não houver pontuação na secção, insere o ponto
    if (!hasDouble){

        //Se for diferente de nada, insere o ponto
        if (number[section] != ''){
            number[section]+=point;
        }

        //Caso seja nada, insere um 0 e o ponto
        else{
            number[section]+='0';
            number[section]+=point;
        }
        
        //Define a existência de pontuação
        hasDouble = true;
        updateScreen();
    }
}

//Função de apagar
function apagar(){

    //Se não houver expressão, apaga dos números se houver número
    if (!hasAction) {
        if (number[section].length>0) {
            number[section] = number[section].slice(0, -1);
            updateScreen();
        }
    } 
    //caso seja uma expressão, deleta de expressão e define que o último
    //digito é um número
    else{
        action[section] = action[section].slice(0, -1);
        hasAction = false;
        updateScreen();
    }

    //Se houver ponto na secção, define que atualmente há pontuação
    if (number[section].includes('.')) {
        hasDouble=true;
    } //caso não, não há
    else{
        hasDouble = false;
    }

    //Se for o último digito da secção, e a secção não for 0,
    //diminui a secção e os arrays
    if (number[section].length == 0 && section != 0) {
        number.pop();
        action.pop();
        section--;
        hasDouble=false;
        hasAction=true;        
    }    

    //Se não houver mais valores, volta a tela inicial
    if (number[0] == '') {
            SCREEN.innerHTML = initScreen;
            return;
        }
}

//Retorna os valores a zero
function limpar(){
    number = [''];
    action = [''];
    section=0;
    hasAction = false;
    hasDouble = false;
    
    SCREEN.innerHTML = initScreen;
}

//Função de retorno do resultado
function verificar(){
    let result = 0;
    
    //Se a última secção de action for '', e o tamanho do array números
    //for pelo menos 2, ele irá fazer a conta
    if (action[action.length-1] == '' && number.length>1) {

        //Para cada item na secção de ação, realiza uma expressão até o
        //o penúltimo valor, pois o último é ''
        for (let i = 0; i < action.length-1; i++) {

            //Caso tal, resultado é o resultado da expressão devida
            switch (action[i]) {
                case '+':
                    result = parseFloat(number[0]) + parseFloat(number[1]);
                    break;
                    
                case '-':
                    result = parseFloat(number[0]) - parseFloat(number[1]);
                    break;

                case 'x':
                    result = parseFloat(number[0]) * parseFloat(number[1]);
                    break;

                case '/':
                    result = parseFloat(number[0]) / parseFloat(number[1]);
                    break;
            }

            //Remove o segundo item de número e define o primeiro sendo o resultado
            number.splice(1,1);
            number[0] = result;

            //Repete até o fim das operações
        }
        
        //Define que não há mais expressões como último dígito
        hasAction = false;

        //Se o resultado for real, define que há pontuação
        if (typeof result === 'number' && !Number.isInteger(result)) {
            hasDouble=true;
        }else{
            hasDouble=false;
        }

        //numero começa com o resultado e expressão não contém nada
        number = [''+result];
        action = [''];
        //Retorna pra a secção inicial
        section=0;
        updateScreen();
    }    
}

//Atualiza a tela
function updateScreen(){
    textNumberAction = '';
    
    //Para cada item em number, adiciona e posteriormente adiciona o item de action
    //de mesmo índice
    for (let i = 0; i < number.length; i++){
        textNumberAction += number[i];
        textNumberAction += action[i];
    }
    //Imprime na tela SCREEN
    SCREEN.innerHTML=textNumberAction;
}