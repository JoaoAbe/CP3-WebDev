const form = document.getElementById("form");
const btnListar = document.getElementById("btnListar")
const selectCategorias = document.getElementById("selectCategorias")
const chkDisponiveis = document.getElementById("chkDisponiveis")
const btnFiltrar = document.getElementById("btnFiltrar")
const btnLimpar = document.getElementById("btnLimpar")
const listaProdutos = document.getElementById("listaProdutos"); 


const produtos = [
    {nome: "Caderno capa dura", preco: 50, categoria: "caderno", disponibilidade: true},
    {nome: "Caderno capa mole", preco: 30, categoria: "caderno", disponibilidade: false},
    {nome: "Agenda", preco: 40, categoria: "caderno", disponibilidade: true},
    {nome: "Fichario", preco: 60, categoria: "caderno", disponibilidade: false},
    {nome: "Caneta preta", preco: 10, categoria: "caneta", disponibilidade: true},
    {nome: "Caneta azul", preco: 10, categoria: "caneta", disponibilidade: false},
    {nome: "Caneta vermelha", preco: 10, categoria: "caneta", disponibilidade: true},
    {nome: "Lápis", preco: 5, categoria: "grafite", disponibilidade: true},
    {nome: "Lapiseira", preco: 10, categoria: "grafite", disponibilidade: true},
    {nome: "Borracha", preco: 50, categoria: "borracha", disponibilidade: true}
];


function exibirProdutos(produtosFiltrados) {
    const erro = document.getElementById("erro");
    erro.textContent = ""; // limpa mensagens anteriores
    listaProdutos.innerHTML = ""; // limpa lista antes de exibir

    if (produtosFiltrados.length === 0) {
        erro.textContent = "Nenhum produto encontrado.";
        return;
    }

    for (var i = 0; i < produtosFiltrados.length; i++) {
        var p = produtosFiltrados[i];

        let cardProduto = document.createElement("div");
        cardProduto.innerHTML = `
            <h3>Nome: ${p.nome}</h3>
            <p>Preço: R$ ${p.preco}</p>
            <p>Categoria: ${p.categoria}</p>
            <p>Disponibilidade: ${p.disponibilidade ? "Sim" : "Não"}</p>
        `;
        listaProdutos.appendChild(cardProduto);
    }
    form.reset();
}


btnListar.addEventListener("click", function(event){
    event.preventDefault();
    exibirProdutos(produtos);
})

btnFiltrar.addEventListener("click", function(event){
    event.preventDefault();
    
    var selecionado = selectCategorias.value;
    var somenteDisponiveis = chkDisponiveis.checked;

    var filtrados = produtos.filter(function(p){
        return p.categoria === selecionado;
    });

    if (somenteDisponiveis) {
        filtrados = filtrados.filter(function(p){
            console.log(p.disponibilidade)
            return p.disponibilidade;
        });
    }

    exibirProdutos(filtrados);
});

btnLimpar.addEventListener("click" , function(event){
    event.preventDefault();
    listaProdutos.innerHTML = "";
    erro.textContent = "";
})

