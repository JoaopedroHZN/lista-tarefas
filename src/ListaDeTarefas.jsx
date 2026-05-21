import { useState, useEffect, useContext } from 'react';
import { TemaContext } from './TemaContext'; // Importando o nosso roteador

function ListaDeTarefas() {
  // ==========================================
  // 1. useContext: Puxando o sinal do Wi-Fi
  // ==========================================
  // A gente não recebe isso por Prop. Puxamos direto do ar!
  const { tema, alternarTema } = useContext(TemaContext);

  // ==========================================
  // 2. useState: A Memória do Componente
  // ==========================================
  // Guarda a nossa lista de tarefas
  const [tarefas, setTarefas] = useState([]);
  // Guarda o que o usuário está digitando no input agora
  const [textoDigitado, setTextoDigitado] = useState('');

  // ==========================================
  // 3. useEffect (Carregar): Roda SÓ 1 VEZ
  // ==========================================
  // Como os colchetes estão vazios [], ele vai lá no navegador
  // buscar as tarefas salvas assim que você abrir a página.
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('minhasTarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // ==========================================
  // 4. useEffect (Salvar): O Cão de Guarda
  // ==========================================
  // Olhe os colchetes: [tarefas]. Toda vez que o array de tarefas 
  // sofrer qualquer alteração, ele roda isso e salva no navegador.
  useEffect(() => {
    localStorage.setItem('minhasTarefas', JSON.stringify(tarefas));
  }, [tarefas]);


  // ==========================================
  // LÓGICA DE NEGÓCIO (A regra da Imutabilidade)
  // ==========================================
  
  // Requisito 1: Adicionar
  const adicionarTarefa = () => {
    if (textoDigitado.trim() === '') return; // Não deixa adicionar vazio
    
    const novaTarefa = { 
      id: Date.now(), // Gera um ID único com a data de hoje
      texto: textoDigitado, 
      concluida: false 
    };
    
    // Spread operator (...): Ctrl+C nas antigas, Ctrl+V aqui e põe a nova no final
    setTarefas([...tarefas, novaTarefa]); 
    setTextoDigitado(''); // Limpa a caixinha de texto
  };

  // Requisito 2: Marcar como concluída
  const alternarConcluida = (id) => {
    // Usamos o .map para gerar um array NOVO. Se achar a tarefa clicada, inverte o status dela.
    const tarefasAtualizadas = tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  // Requisito 3: Remover
  const removerTarefa = (id) => {
    // Usamos o .filter para gerar um array NOVO só com as tarefas que NÃO tem esse ID
    const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  };

  // ==========================================
  // O VISUAL (HTML/JSX)
  // ==========================================
  return (
    // A classe CSS muda dinamicamente dependendo da variável 'tema'
    <div className={`app-container ${tema}`}>
      <div className="card-tarefas">
        
        <header>
          <h1>Minhas Tarefas</h1>
          {/* Botão que chama a função do Contexto */}
          <button className="btn-tema" onClick={alternarTema}>
            {tema === 'claro' ? '🌙 Modo Escuro' : '☀️ Modo Claro'}
          </button>
        </header>

        <div className="area-input">
          <input 
            type="text" 
            placeholder="O que precisa ser feito?"
            value={textoDigitado}
            onChange={(e) => setTextoDigitado(e.target.value)} // Atualiza o estado a cada letra digitada
          />
          <button className="btn-adicionar" onClick={adicionarTarefa}>Adicionar</button>
        </div>

        <ul>
          {/* Fazendo o loop (map) para mostrar cada tarefa */}
          {tarefas.map(tarefa => (
            <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
              
              <span onClick={() => alternarConcluida(tarefa.id)}>
                {tarefa.concluida ? '✅' : '⬜'} {tarefa.texto}
              </span>
              
              <button className="btn-remover" onClick={() => removerTarefa(tarefa.id)}>
                🗑️
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default ListaDeTarefas;