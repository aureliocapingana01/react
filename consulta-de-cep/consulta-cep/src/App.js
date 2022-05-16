import logo from './logo.svg';
import './App.css';
import Pesquisa from './Containers/Pesquisa'
import Carregando from './Containers/Carregando';
import Resultado from './Containers/Resultado';
import Erro from './Containers/Erro';


function App(){
  return <div>

    <Erro erroMessage="CEP não encontrado" />
  
  </div>
  
}

export default App;
