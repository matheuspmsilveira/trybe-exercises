import './App.css';

const compromissos = ['acordar', 'escovar os dentes', 'tomar cafe', 'estudar'];

const Task = () => {
  return compromissos.map((compromisso) => <li>{compromisso}</li>);
};

function App() {
  return (
    <ul>
      <Task />
    </ul>
  );
}

export default App;
