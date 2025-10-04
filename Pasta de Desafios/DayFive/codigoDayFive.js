const entrada = document.getElementById("entrada");
const listaSuspensa = document.getElementById("selecTipo");
const botaoEnviar = document.getElementById("botaoEnviar");
const botaoReiniciar = document.getElementById("botaoReiniciar");
const listaFrutas = document.getElementById("listaFrutas");
const listaLaticineos = document.getElementById("listaLaticineos");
const listaCongelados = document.getElementById("listaCongelados");
const listaDoces = document.getElementById("listaDoces");
const listaOutros = document.getElementById("listaOutros");

let arrayFrutas = [];
let arrayLaticineos = [];
let arrayCongelados = [];
let arrayDoces = [];
let arrayOutros = [];

let base = [["frutas", arrayFrutas, listaFrutas],["laticineos", arrayLaticineos, listaLaticineos],["congelados", arrayCongelados, listaCongelados],["doces", arrayDoces, listaDoces],["outros", arrayOutros, listaOutros]];

function inserirItem(){
    let item = entrada.value;
    let tipo = listaSuspensa.value;

    if(item==='' || typeof(item) == typeof(0)){
        return;
    }
    if(tipo===''){
        return;
    }

    for (let i = 0; i<base.length; i++){
        if(tipo==base[i][0]){
            adicionarNaLista(base[i][1], base[i][2], item);
            break;;
        }
    }
    entrada.value = '';
}

function adicionarNaLista(lista, listaHTML, adicionado){
    lista.push(adicionado);

    listaHTML.innerHTML="";

    for(i = 0; i < lista.length; i++){
        var adicionaItem = document.createElement('li');
        adicionaItem.textContent=lista[i];
        listaHTML.appendChild(adicionaItem);
        
    }
}

function reiniciar(){
    for(let i = 0; i<base.length; i++){
        base[i][1] = [];
        base[i][2].innerHTML = "";
    }
}