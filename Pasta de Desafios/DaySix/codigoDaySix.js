//Criacao das constantes dos botoes de tipos de intes da loja
const escFruta = document.getElementById("frutas");
const escLaticineos = document.getElementById("laticineos");
const escCongelados = document.getElementById("congelados");
const escDoces = document.getElementById("doces");
const escOutros = document.getElementById("outros");

//Lista da loja e do carrinho
const listaHTML = document.getElementById("listaLoja");
const listaCarrinhoHTML = document.getElementById("listaCarrinho");

//Label da quantidade geral e do preco total
const qtdGeralHTML = document.getElementById('qtdItensGeral');
const precoTotHTML = document.getElementById('precoTot');

//Variavel de auxilio da escolha dos tipos de itens da loja
var esc = 0;

//Lista ativa para loja e lista do carrinho
let listaAtiva = [];
let listaCarrinho = [];

//Variaveis da quantidade geral e preco total
let qtdItensGeral = 0;
let precoTot = 0.0;

//Arrays de definicao de itens e preco individual
listaFrutas=[
    ['Banana', 5.8],
    ['Maca', 3.5],
    ['Laranja', 2.5],
    ['Mamão', 6.8],
    ['Açaí', 15]
];

listaLaticineos=[
    ['Iorgute', 4.5],
    ['Queijo', 9.9],
    ['Toddynho', 6.7],
    ['Leite', 8.5],
    ['Danone', 5.4]
];

listaCongelados=[
    ['Carne Bovina', 15.5],
    ['Carne Suína', 13.5],
    ['Frango', 9.9],
    ['Frango Empanado', 1.89],
    ['Pizza', 12.5]
];

listaDoces=[
    ['Candy', 2.5],
    ['Mm', 2.6],
    ['Caixa de Bombom', 12],
    ['Waffle', 3.5],
    ['LollyPop', 2.5]
];

listaOutros=[
    ['Arduino Uno', 56.7],
    ['Computador Gamer', 3500],
    ['Pratos 10x', 100],
    ['Celular', 2000],
    ['TV', 5000]
];


//Funcoes de escolha das frutas atraves do clique do botao
//Fruta = 1, Lat. = 2, Congelados = 3, Doces = 4, Outros = 5, neutro = 0
//Se a variavel esc for diferente do indice do tipo, preenche a loja com o array do tipo
//Se nao, reseta a lista da loja, reseta a listaAtiva e esc = 0.
//Frutas
function escolheFrutas(){
    if (esc!=1){
        esc=1;
        preencherLoja(listaFrutas);
    }
    else{
        listaHTML.innerHTML='';
        listaAtiva=[];
        esc = 0;
    }
}

//Laticineos
function escolheLaticineos(){
    if (esc!=2){
        esc=2;
        preencherLoja(listaLaticineos);
    }
    else{
        listaHTML.innerHTML='';
        listaAtiva=[];
        esc = 0;
    }
}

//Congelados
function escolheCongelados(){
    if (esc!=3){
        esc=3;
        preencherLoja(listaCongelados);
    }
    else{
        listaHTML.innerHTML='';
        listaAtiva=[];
        esc = 0;
    }
}

//Doces
function escolheDoces(){
    if (esc!=4){
        esc=4;
        preencherLoja(listaDoces);
    }
    else{
        listaHTML.innerHTML='';
        listaAtiva=[];
        esc = 0;
    }
}

//Outros
function escolheOutros(){
    if (esc!=5){
        esc=5;
        preencherLoja(listaOutros);
    }
    else{
        listaHTML.innerHTML='';
        listaAtiva=[];
        esc = 0;
    }
}

//Funcao principal de preencher a loja com a devida lista
function preencherLoja(listaEsc){
    //Zera a lista HTML da loja e define a lista ativa como a listaEscolhida
    listaHTML.innerHTML='';
    listaAtiva=listaEsc;

    //Para cada item no array do tipo de item, cria um item de lista com:
    //Nome, preco, input de entrada da quantidade e botao adicionar
    for(let i =0; i<listaEsc.length;i++){
        let nome = document.createElement('label');
        nome.textContent = listaEsc[i][0];
        nome.classList.add("escopo__loja__lista__item__prod");

        let preco = document.createElement('label');
        //define que sera o preco em moeda Real R$0.00
        preco.textContent = "R$"+listaEsc[i][1].toFixed(2);
        preco.classList.add("escopo__loja__lista__item__preco");

        let input = document.createElement('input');
        input.type = 'number';
        input.min = '1';
        input.placeholder = 'Qtd';
        input.id = 'entrada_'+i;
        input.classList.add("escopo__loja__lista__item__input");

        let botao = document.createElement('button');
        //define o valor do botao para ser igual ao indice i, para controle de adicao
        botao.value=i;
        botao.textContent= '+';
        //Adiciona a funcao adicionarNoCarrinho ao botao
        botao.addEventListener('click', adicionarNoCarrinho);
        botao.classList.add('escopo__loja__lista__item__add')

        //cria uma lista li para comportar tudo
        let lista = document.createElement('li');
        lista.classList.add('escopo__loja__lista__item');

        lista.appendChild(nome);
        lista.appendChild(preco);
        lista.appendChild(input);
        lista.appendChild(botao);
        
        //Insere a lista na listaHTML
        listaHTML.appendChild(lista);
    }
}

//Funcao de adicao no carrinho de compras
function adicionarNoCarrinho(){
    //pega o valor do botao pressionado (definido anteriormente como o indice da lista)
    let id = this.value;
    //pega o valor do input da entrada da lista escolhida e retorna seu valor
    let input = 'entrada_'+id;
    let inputHTML = document.getElementById(input);
    let qtd = inputHTML.value;
    inputHTML.value = '';

    //verifica se o valor não é 0 ou negativo
    if(qtd <= 0){
        return;
    }

    //transforma em inteiro a quantidade
    qtd = parseInt(qtd, 10);

    //verifica se o item adicionado já não está na lista do carrinho
    let casa = listaCarrinho.findIndex(itemExistente => itemExistente[0] === listaAtiva[id][0]);

    //se estiver, adiciona a quantidade inserida nele e encerra
    if(casa!==-1){
        listaCarrinho[casa][2]+=qtd;
        atualizarCarrinhoHTML();
        return;
    }

    //se não, cria uma lista para comportar nome, preco e qtd do item escolhido
    lista = [
        listaAtiva[id][0],
        listaAtiva[id][1],
        qtd,
    ];

    //adiciona a lista na lista do carrinho e atualiza a listaCarrinhoHTML
    listaCarrinho.push(lista);
    atualizarCarrinhoHTML();
}

//Funcao de atualizacao da lista do html do carrinho
function atualizarCarrinhoHTML(){
    listaCarrinhoHTML.innerHTML='';    
    //para todo array existente na lista do carrinho, ele criara uma li com as seguintes
    //atribuicoes:
    //nome, preco, botaoDiminuir, qtd, botaoIncrementar e botaoExcluir da lista
    //Nos botoes, value = i para evento futuro
    for(let i = 0; i< listaCarrinho.length;i++){

        let nome = document.createElement('label');
        nome.textContent=listaCarrinho[i][0];
        nome.classList.add("escopo__carrinho__lista__item__prod");

        let preco = document.createElement('label');
        preco.textContent="R$"+listaCarrinho[i][1].toFixed(2);
        preco.classList.add("escopo__carrinho__lista__item__preco");

        let botaoRem = document.createElement('button');
        botaoRem.textContent='-';
        botaoRem.value=i;
        //Adiciona o evento, ao clicar, diminuirValor()
        botaoRem.addEventListener('click', diminuirValor);
        botaoRem.classList.add("escopo__carrinho__lista__item__botao");

        let qtd = document.createElement('label');
        qtd.textContent = listaCarrinho[i][2];
        qtd.classList.add("escopo__carrinho__lista__item__qtd");

        let botaoAdd = document.createElement('button');
        botaoAdd.textContent='+';
        botaoAdd.value = i;
        //Adiciona o evento, ao clicar, adicionarValor()
        botaoAdd.addEventListener('click', adicionarValor);
        botaoAdd.classList.add("escopo__carrinho__lista__item__botao");

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent='X';
        botaoExcluir.value=i;
        //Adiciona o evento, ao clicar, excluirDoCarrinho()
        botaoExcluir.addEventListener('click', excluirDoCarrinho);
        botaoExcluir.classList.add("escopo__carrinho__lista__item__botaoExcluir");

        //cria a lista e define tudo dentro da mesma li
        let item = document.createElement('li');
        item.classList.add("escopo__carrinho__lista__item");

        item.appendChild(nome);
        item.appendChild(preco);
        item.appendChild(botaoRem);
        item.appendChild(qtd);
        item.appendChild(botaoAdd);
        item.appendChild(botaoExcluir);

        //adiciona a lista para a listaCarrinhoHTML (html da lista do carrinho)
        listaCarrinhoHTML.appendChild(item);
    }
    //atualiza o total
    atualizarTotal();
}

//Incrementa a quantidade do item do carrinho, desde que a quantidade nao seja
//menor que 0, se for menor que 0, ele ira remover da lista
function diminuirValor(){
    let id = this.value;
    let qtdAtual = listaCarrinho[id][2];
    if(qtdAtual>0){
        listaCarrinho[id][2]-=1;
        atualizarCarrinhoHTML();
    }
    else{
        excluirDoCarrinho(id);
    }
}

//incrementa a quantidade do item no carrinho 
function adicionarValor(){
    let id = this.value;
    listaCarrinho[id][2]+=1;
    atualizarCarrinhoHTML();
}

//exclui o item do carrinho
function excluirDoCarrinho(){
    let id = this.value;
    listaCarrinho.splice(id,1);
    atualizarCarrinhoHTML();
}

//exclui o item do carrinho se for diminuido direto da funcao 'diminuirValor()'
function excluirDoCarrinho(id){
    listaCarrinho.splice(id,1);
    atualizarCarrinhoHTML();
}

//Atualiza o total - Qtd Itens e preco total
function atualizarTotal(){
    precoTot=0;
    qtdItensGeral=0;
    for(i = 0; i<listaCarrinho.length; i++){
        precoTot+= listaCarrinho[i][1]*listaCarrinho[i][2];
        qtdItensGeral+=listaCarrinho[i][2];
    }

    precoTotHTML.innerHTML = 'R$'+precoTot.toFixed(2);
    qtdGeralHTML.innerHTML = qtdItensGeral;
}

//Reinicia a pagina (a lista do carrinho)
function reiniciar(){
    listaCarrinho = [];
    atualizarCarrinhoHTML();
}