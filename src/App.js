import './App.css';
import AdicionarLugares from './components/Formulario';
import ListarRestaurantes from './components/ListarRestaurantes';
import React, { useState } from 'react';

function App() {
  const [restaurantes, setRestaurantes] = useState([
    {
      id: 1,
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
        tamanho = {restaurantes.length}
      />
      <ListarRestaurantes
        lista={restaurantes}
        setRestaurantes={setRestaurantes}
      />
    </div>
  );
}

export default App;