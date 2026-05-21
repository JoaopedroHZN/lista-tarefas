import { TemaProvider } from './TemaContext';
import ListaDeTarefas from './ListaDeTarefas';
import './App.css';

function App() {
  return (
    <TemaProvider>
      <ListaDeTarefas />
    </TemaProvider>
  );
}

export default App;