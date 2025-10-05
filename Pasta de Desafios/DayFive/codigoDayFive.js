//Criação da constante de entrada
const entrada = document.getElementById("entrada");
//Lista de escolha
const listaSuspensa = document.getElementById("selecTipo");

//Botões enviar e reiniciar
const botaoEnviar = document.getElementById("botaoEnviar");
const botaoReiniciar = document.getElementById("botaoReiniciar");

//Atribuição das listas de itens
const listaFrutas = document.getElementById("listaFrutas");
const listaLaticineos = document.getElementById("listaLaticineos");
const listaCongelados = document.getElementById("listaCongelados");
const listaDoces = document.getElementById("listaDoces");
const listaOutros = document.getElementById("listaOutros");

//Array auxiliares para as listas de itens
let arrayFrutas = [];
let arrayLaticineos = [];
let arrayCongelados = [];
let arrayDoces = [];
let arrayOutros = [];

//Base de relacionamento do retorno da seleção, o array da lista e a lista em HTML
let base = [["frutas", arrayFrutas, listaFrutas],["laticineos", arrayLaticineos, listaLaticineos],["congelados", arrayCongelados, listaCongelados],["doces", arrayDoces, listaDoces],["outros", arrayOutros, listaOutros]];

//Função de inserção de itens nas listas
function inserirItem(){
    let item = entrada.value;
    let tipo = listaSuspensa.value;

    //Verifica se é válido a inserção, se não, retorna
    if(item==='' || typeof(item) == typeof(0) || tipo===''){
        return;
    }

    //Se for válido, realiza uma busca pelo tipo na base 0, onde está a escolha
    //Se encontrar, adiciona na lista com os parâmetros Array, ListaHTMl e o item
    //a ser adicionado
    for (let i = 0; i<base.length; i++){
        if(tipo==base[i][0]){
            adicionarNaLista(base[i][1], base[i][2], item);
            break;
        }
    }
    //Reseta o valor de entrada.
    entrada.value = '';
}

//Função para adição na lista escolhida
function adicionarNaLista(lista, listaHTML, adicionado){
    //Envia para o array o item adicionado
    lista.push(adicionado);

    //Reseta a lista do HTML
    listaHTML.innerHTML="";

    //Para todo item no array, insere como 'li' dentro da listaHTML
    for(i = 0; i < lista.length; i++){
        var adicionaItem = document.createElement('li');
        adicionaItem.textContent=lista[i];
        listaHTML.appendChild(adicionaItem);
    }

    //Reinicia a lista suspensa
    listaSuspensa.value='';
}

//Reinicia todo o site.
function reiniciar(){
    for(let i = 0; i<base.length; i++){
        base[i][1] = [];
        base[i][2].innerHTML = "";
    }
    listaSuspensa.value ='';
    entrada.value='';
}