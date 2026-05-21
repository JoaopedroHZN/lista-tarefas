import { createContext, useState } from 'react';

// 1. CRIANDO O ROTEADOR: 
// O createContext() prepara o React para criar uma rede global.
export const TemaContext = createContext();

// 2. CRIANDO A ANTENA (O Provider):
// Esse componente vai "abraçar" o nosso aplicativo e transmitir os dados.
export function TemaProvider({ children }) {
  
  // Guardamos o tema atual na memória. Começa como 'claro'.
  const [tema, setTema] = useState('claro');

  // Função simples para o botão: se tiver claro, vira escuro. Se tiver escuro, vira claro.
  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    // O 'value' é como se fosse a "senha" do Wi-Fi. 
    // Tudo que colocamos dentro dessas chaves duplas {{ }} estará disponível
    // para qualquer arquivo do projeto que se conectar nesse contexto.
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {/* O 'children' significa "todo o resto do aplicativo que estiver aqui dentro" */}
      {children}
    </TemaContext.Provider>
  );
}