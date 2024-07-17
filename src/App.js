import './App.css';
import AdicionarLugares from './components/Formulario';
import ListarRestaurantes from './components/ListarRestaurantes';
import React, { useState } from 'react';

function App() {
  const [restaurantes, setRestaurantes] = useState([
    {
      nome: "Restaurante universitário",
      descricao: "Restaurante para universitários"
    },
  ]);

  const adicionarRestaurante = (novoRestaurante) => {
    setRestaurantes([...restaurantes, novoRestaurante]);
  };

  return (
    <div className="App">
      <h1>Lista de Restaurantes</h1>
      <AdicionarLugares
        adicionarRestaurante={adicionarRestaurante}
      />
      <ListarRestaurantes
        lista={restaurantes}
      />
    </div>
  );
}

export default App;
