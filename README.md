# 📋 Gerenciador de Tarefas com React Hooks

[cite_start]Este projeto é uma aplicação de **Lista de Tarefas (To-Do List)** desenvolvida em React utilizando Vite[cite: 408]. [cite_start]O objetivo principal da atividade é aplicar de forma prática os conceitos de gerenciamento de estado, efeitos colaterais e compartilhamento de dados globais na árvore de componentes através dos principais React Hooks[cite: 2, 408].

[cite_start]Projeto desenvolvido para a disciplina de **Desenvolvimento de Software para Web** no **CEULP/ULBRA**[cite: 3, 5].

---

## 🚀 Tecnologias Utilizadas

* [cite_start]**React** (Componentes Funcionais) [cite: 65]
* **Vite** (Build tool rápida e leve)
* **JavaScript (ES6+)**
* **CSS3** (Estilização customizada com suporte a temas dinâmicos)

---

## 🧠 Hooks Implementados e Aprendizados

[cite_start]O projeto serviu para solidificar as 5 regras de ouro do desenvolvimento com React Hooks[cite: 400]:

1.  [cite_start]**`useState` (Memória do Componente):** Utilizado para gerenciar o estado local das tarefas e do input de texto[cite: 95, 409]. [cite_start]Foi aplicada a regra da **imutabilidade**, garantindo que novas referências de memória fossem geradas ao adicionar, concluir ou remover itens (utilizando *Spread Operator*, `.map()` e `.filter()`)[cite: 170, 202, 403].
2.  [cite_start]**`useEffect` (Sincronização com o Navegador):** Responsável por conectar a aplicação ao mundo externo através do `localStorage`[cite: 305, 410]. [cite_start]Foram criados dois efeitos conscientes [cite: 404][cite_start]: um para carregar as tarefas salvas ao montar o componente (`[]`) e outro como cão de guarda para persistir os dados a cada alteração no array (`[tarefas]`)[cite: 238].
3.  [cite_start]**`useContext` (Evitando Prop Drilling):** Implementado para criar um ecossistema de **Tema Escuro/Claro** global[cite: 310, 411]. [cite_start]A Context API permitiu teletransportar a função de alternância e o estado do tema diretamente do componente raiz para o botão consumidor, eliminando o acoplamento de componentes intermediários[cite: 331, 344, 352].

---

## 🛠️ Funcionalidades Mínimas Atendidas

* [cite_start][x] Adicionar novas tarefas (bloqueando textos vazios) [cite: 413]
* [cite_start][x] Marcar/desmarcar tarefas como concluídas (com feedback visual na interface) [cite: 414]
* [cite_start][x] Remover tarefas de forma definitiva da lista [cite: 415]
* [cite_start][x] Persistência total no `localStorage` do navegador (sobrevive ao F5) [cite: 416]
* [cite_start][x] Alternância dinâmica entre Tema Claro e Tema Escuro [cite: 417]

---

## 🔧 Como Rodar o Projeto Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

1. Clone o repositório ou baixe a pasta do projeto.
2. Abra o terminal na raiz do projeto e instale as dependências:
   ```bash
   npm install
