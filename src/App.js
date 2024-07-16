import './App.css';
import ListarRestaurantes from './components/ListarRestaurantes';

function App() {
  const Restaurantes = [
    {
      nome: "Restaurante universitário",
      descricao: "Restaurante para universitários"
    },
    {
      nome: "RA",
      descricao: "Restaurante para universitários"
    },
    {
      nome: "RA",
      descricao: "Restaurante para universitários"
    }
  ]
  return (
    <div className="App">
      <ListarRestaurantes
        lista={Restaurantes}
      />
    </div>
  );
}

export default App;
