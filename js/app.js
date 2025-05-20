const form = document.getElementById("form");
const btnListar = document.getElementById("btnListar")
const selectCategorias = document.getElementById("selectCategorias")
const chkDisponiveis = document.getElementById("chkDisponiveis")
const btnFiltrar = document.getElementById("btnFiltrar")


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

console.log(produtos)