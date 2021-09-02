import Pokedex from './components/Pokedex';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className='App'>
      <h1>Minha Pokedex</h1>
      <Pokedex />
      <GlobalStyle />
    </div>
  );
}

export default App;
