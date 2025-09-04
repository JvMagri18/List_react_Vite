# 📋 Lista de Tarefas - React + Vite

Uma aplicação simples de **To-Do List** construída com **React** e **Vite**, responsiva e estilizada com CSS puro. Projeto de estudo e portfólio — já publicado em GitHub Pages.

👉 Página publicada: [https://jvmagri18.github.io/List\_react\_Vite/](https://jvmagri18.github.io/List_react_Vite/)

---

## 🧭 Visão geral

Este projeto implementa as funcionalidades básicas de gerenciamento de tarefas: adicionar, buscar, filtrar, ordenar, marcar como concluído e remover tarefas. A interface é leve, com foco em usabilidade e responsividade.

---

## 🛠 Tecnologias

* React (componentes funcionais + hooks)
* Vite (bundler de desenvolvimento)
* JavaScript (ES6+)
* CSS3

---

## ✨ Funcionalidades

* Adicionar nova tarefa com título e categoria (Trabalho / Pessoal / Estudos)
* Marcar/desmarcar tarefa como concluída
* Remover tarefas
* Buscar tarefas por texto
* Filtrar por: Todos / Completas / Incompletas
* Ordenação alfabética (Asc / Desc)
* Layout responsivo (desktop e mobile)

---

## 📁 Estrutura do projeto

```
public/
  └─ vite.svg
src/
  ├─ Componentes/
  │   ├─ Filter.jsx
  │   ├─ Form.jsx
  │   ├─ Search.jsx
  │   └─ Todo.jsx
  ├─ Img/
  ├─ App.css
  ├─ App.jsx
  └─ main.jsx
.gitignore
index.html
package.json
vite.config.js
README.md
```

---

## ⚙️ Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/jvmagri18/List_react_Vite.git
```

2. Acesse a pasta do projeto:

```bash
cd List_react_Vite
```

3. Instale as dependências:

```bash
npm install
```

4. Rode em modo de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador (Vite geralmente usa `http://localhost:5173`):

```
http://localhost:5173
```

---

## 🧩 Componentes principais

* **App.jsx** — Componente principal que mantém o estado das `todos`, `search`, `filter` e `sort`. Controla as funções `addTodo`, `removeTodo` e `completarTodo`.
* **Componentes/Form.jsx** — Formulário para criar novas tarefas (título + categoria).
* **Componentes/Search.jsx** — Campo de busca por texto.
* **Componentes/Filter.jsx** — Controle de filtro por status e botões para ordenar alfabeticamente.
* **Componentes/Todo.jsx** — Renderiza cada item da lista com botões para completar e deletar.

---
