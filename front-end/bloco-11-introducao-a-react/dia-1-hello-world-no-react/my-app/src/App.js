import './App.css';

const compromissos = ['acordar', 'escovar os dentes', 'tomar cafe', 'estudar'];

const Task = (value) => {
  return <li>{value}</li>;
};

function App() {
  return <ul>{compromissos.map((compromisso) => Task(compromisso))}</ul>;
}

export default App;
