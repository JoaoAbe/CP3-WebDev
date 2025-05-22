# 📄 CP3-WebDev - JavaScript

## ✅ Descrição do Projeto

Este projeto conta com **cinco arquivos**, sendo dois para documentação e três para o funcionamento do sistema:

### 🗂️ Arquivos do Projeto

- **`index.html`**  
  Contém uma `section` com um formulário que possui três botões: **Listar**, **Filtrar** e **Limpar**; um `select` e um `checkbox`.  
  Também possui uma segunda `section` com uma `div` para exibir os objetos do array.

- **`style.css`**  
  Arquivo responsável pelo **estilo** do formulário e demais elementos do `index.html`.

- **`app.js`**  
  Arquivo que contém toda a **lógica de interação** do sistema, utilizando eventos como `onclick` e `mouseover`.

- **Documentação**  
  Documento explicativo com o **funcionamento do JavaScript**, descrevendo funções, eventos, constantes e variáveis.

- **Diagrama**  
  Estrutura visual da **lógica por trás** dos eventos e funções.

---

## 🖱️ Eventos Utilizados

O projeto utiliza os seguintes eventos para interatividade:

- `onclick`
- `mouseover`
- `mouseout`

---

## 🛠️ Funções Criadas

As seguintes funções foram desenvolvidas para manipular e exibir os dados:

- `exibirProdutos(produtosFiltrados)`  
  Responsável por exibir os produtos na interface.

- Funções anônimas associadas aos eventos:  
  - `btnListar`  
  - `btnFiltrar`  
  - `btnLimpar`

---

## 🗃️ Estrutura do Array de Objetos

O array contém **10 objetos** com as seguintes propriedades:

- `nome`
- `preco`
- `categoria`
- `disponibilidade`

---

## 🔗 Constantes Definidas

As constantes foram definidas com base nos **IDs** dos elementos do formulário:

const form = document.getElementById("form");
const btnListar = document.getElementById("btnListar");
const selectCategorias = document.getElementById("selectCategorias");
const chkDisponiveis = document.getElementById("chkDisponiveis");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnLimpar = document.getElementById("btnLimpar");
const listaProdutos = document.getElementById("listaProdutos");

---

## 🖥️ Tecnologias Utilizadas

- **Visual Studio Code** → Programação  
- **GitHub** → Versionamento de código  
- **Lucidchart** → Criação do diagrama  
- **Paint.NET** → Edição do diagrama  
- **Microsoft Word** → Documentação  

---

## 👨‍💻 Integrantes

- João Victor de Souza Abe - **RM: 561446**

---

## 💻 Código JavaScript

```javascript
const form = document.getElementById("form");
const btnListar = document.getElementById("btnListar");
const selectCategorias = document.getElementById("selectCategorias");
const chkDisponiveis = document.getElementById("chkDisponiveis");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnLimpar = document.getElementById("btnLimpar");
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
    erro.textContent = ""; 
    listaProdutos.innerHTML = ""; 

    if (produtosFiltrados.length === 0) {
        erro.textContent = "Nenhum produto encontrado.";
        return;
    }

    produtosFiltrados.forEach((p) => {
        let cardProduto = document.createElement("div");
        cardProduto.innerHTML = `
            <h3>Nome: ${p.nome}</h3>
            <p>Preço: R$ ${p.preco}</p>
            <p>Categoria: ${p.categoria}</p>
            <p>Disponibilidade: ${p.disponibilidade ? "Sim" : "Não"}</p>
            <br>
        `;
        cardProduto.addEventListener("mouseover", () => {
            cardProduto.style.transform = "scale(1.05)";
            cardProduto.style.transition = "transform 0.3s";
        });
        cardProduto.addEventListener("mouseout", () => {
            cardProduto.style.transform = "scale(1)";
            cardProduto.style.transition = "transform 0.3s";
        });
        listaProdutos.appendChild(cardProduto);
    });

    form.reset();
}

btnListar.addEventListener("click", function(event){
    event.preventDefault();
    exibirProdutos(produtos);
});

btnFiltrar.addEventListener("click", function(event){
    event.preventDefault();
    
    const selecionado = selectCategorias.value;
    const somenteDisponiveis = chkDisponiveis.checked;

    let filtrados = produtos.filter((p) => p.categoria === selecionado);

    if (somenteDisponiveis) {
        filtrados = filtrados.filter((p) => p.disponibilidade);
    }

    exibirProdutos(filtrados);
});

btnLimpar.addEventListener("click", function(event){
    event.preventDefault();
    listaProdutos.innerHTML = "";
    erro.textContent = "";
});
