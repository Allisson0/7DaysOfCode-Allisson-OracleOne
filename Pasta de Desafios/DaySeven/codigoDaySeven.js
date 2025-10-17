const SCREEN = document.getElementById("telaCalculadora");
const initScreen = "Calc. 3.000";

let hasDouble = false;
let hasAction = false;

let number = [''];
let action = [''];
let textNumberAction = "";
let section = 0;

function digitar(button){

    if(hasAction){
        section++;
        number.push('');
        action.push('');
        hasDouble= false;
    }

    hasAction = false;

    let choose = button.value;

    if (choose == '0' && number[section] == "0"){
        return;
    }

    number[section] += choose;
    updateScreen();

}

function acao(button){

    if (!hasAction && number[section].length > 0) {
        hasAction = true;

        let lastThing = number[section][-1];

        if (lastThing != button.value) {
            action[section] = button.value;
        }        
        updateScreen();
    } 
    else if (number[section].length > 0) {
        action[section] = button.value;
        updateScreen();
    }
    
}

function pontuar(button){

    let point = button.value;

    if (!hasDouble){
        if (number[section] != ''){
            number[section]+=point;
        }
        else{
            number[section]+='0';
            number[section]+=point;
        }
        hasDouble = true;
        updateScreen();
    }
    
}


function apagar(){

    if (!hasAction){
        if (number[section].length>0) {
            number[section] = number[section].slice(0, -1);
            updateScreen();
        }
    } else{
        action[section] = action[section].slice(0, -1);
        hasAction = false;
        updateScreen();
    }

    if (number[section][number[section].length -1] == '.') {
        hasDouble=true;
    } else{
        hasDouble = false;
    }

    if (number[section] == 0 && section != 0){
        number.pop();
        action.pop();
        section--;
        hasDouble=false;
        hasAction=true;        
    }    

    if (number[0] == ''){
            SCREEN.innerHTML = initScreen;
            return;
        }
}

function limpar(){
    number = [''];
    action = [''];
    section=0;
    hasAction = false;
    hasDouble = false;
    
    SCREEN.innerHTML = initScreen;
}


function verificar(){
    let result = 0;

    console.log(number);
    console.log(action);

    if (action[action.length-1] == '' && number.length>1) {
        for (let i = 0; i < action.length-1; i++) {

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

            number.splice(1,1);
            number[0] = result;
            
        }
        
        hasAction = false;

        if (typeof result === 'number' && !Number.isInteger(result)) {
            hasDouble=true;
        }else{
            hasDouble=false;
        }

        number = [''+result];
        action = [''];
        section=0;
        console.log(number);
        console.log(action);
        updateScreen();
    }    
}

function updateScreen(){
    textNumberAction = '';
    for (let i = 0; i < number.length; i++){
        textNumberAction += number[i];
        textNumberAction += action[i];
    }
    SCREEN.innerHTML=textNumberAction;
}