# Documentação de projeto em React

Esse projeto foi desenvolvido usando [React](https://github.com/facebook/create-react-app) com base na temática de Lista de restaurantes para visitar.

## Primeiros comandos

Para criar um projeto React:

```
npx create-react-app nome_do_projeto
```

Caso você apenas faça clone desse projeto você deve executar o comando abaixo:

```
npm i
```

## Programando o projeto

### Arquivo App.js

No arquivo `App.js` na linha 2 e 3 nós importamos os componentes criados e o React, mais necessariamente o useState

```
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

...
```
* O `useState` está sendo utilizado para armazenar valores em lista no formato de objetos que serão atualizados e incrementados utilizando a função `setRestaurantes`

```
...

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
```

* A função `adicionarRestaurante` está recebendo como parametro o `novoRestaurante` que está adicionando valor a lista com base nos valores que já existem (os objetos) e adicionando o `novoRestaurante`, que recebe um valor que está sendo passado dentro de um dos componentes do projeto;
* Linha 23: Está sendo passado a função `novoRestaurante` para o componente `Formulario.jsx`;
* Linha 24: Está sendo passado o tamando da lista de restaurantes;
* Linha 27 e 28: Está sendo passado a lista `restaurantes` e a função ``setRestaurantes`

### Arquivo Formulario.jsx

No arquivo `Formulario.jsx` na linha 1 e 2 nós importamos o componente useRef e o arquivo css `style.css`.

```
import React, {useRef} from 'react';
import '../style.css';

function AdicionarLugares({adicionarRestaurante, tamanho}) {
    const nomeL = useRef(null);
    const descricaoL = useRef(null);

    const click = (e) => {
        e.preventDefault();
        const nome = nomeL.current.value;
        const descricao = descricaoL.current.value;

        adicionarRestaurante({ 
            id: tamanho + 1,
            nome: nome, 
            descricao: descricao 
        });

        nomeL.current.value = '';
        descricaoL.current.value = '';
    };

...
```
* Linha 4: Está sendo recebido dois parametros por meio de objetos que tinham sido enviados no arquivo `App.js`;
* Linha 5 e 6: Está sendo criado duas constantes que recebem um useRef que recebe o valor DOM do formulario do arquivo sem atualizar a página;
* Linha 13 a 17: Está sendo criado um novo objeto para a lista, passando um id que leva em conta o tamanho da lista + 1 para que o id não se repita, um nome e uma descricao que recebem as constantes de mesmo nome que recebe values dos inputs;
* Linha 19 e 20: Está sendo limpo os campos de input.

```
...

    return (
        <form className="formulario">
            <input
                id="formulario_nome"
                type="text"
                placeholder="Nome do local"
                ref={nomeL}
            />
            <input
                id="formulario_descricao"
                type="text"
                placeholder="Descrição do local"
                ref={descricaoL}
            />
            <button
                id="formulario_button"
                onClick={click}
            >Adicione a sua lista</button>
        </form>
    );
}

export default AdicionarLugares;
```

### Arquivo ListarRestaurantes.jsx

No arquivo `ListarRestaurantes.jsx` na linha 1 e 2 nós importamos um arquivo de imagem e um arquivo css chamado `style.css`.

```
import foto from '../restaurante.png';
import '../style.css'

function ListarRestaurantes({lista, setRestaurantes}){

  const removerItem = (id) =>{
    const index = lista.findIndex(restaurante => restaurante.id === id);
    
    if (index !== -1) {
      const novaLista = lista.filter(restaurante => restaurante.id !== id);
      setRestaurantes(novaLista);
    }
  }

...
```
* Linha 3: Recebemos como paramentro na função a `lista` dos restaurantes e a função `setRestaurantes`;
* Linha 7: A constante index está recebendo a posição de um elemento da lista passando um paramentro que usa como base o id do restaurante;
* Linha 9: Está sendo verificado se o index é diferente de -1;
* Linha 10 e 11: Está sendo criado o `novaLista` que recebe um valor filtrado da lista seguindo a regra de que o id do restaurante deve ter o elemento sem id excluido da lista, então nós passamos a lista atualizada para a variavel `restaurantes`.

```
return(
    <div className='div-restaurante'>
      {lista.map(restaurante => (
          <section key={restaurante.id} className='div-restaurante_restaurantes'>
            <img id='foto-restaurante' src={foto}/>
            <div className='restaurantes_info'>
              <p id="restaurantes_info_paragrafo-titulo" key={restaurante.nome}>
                {restaurante.nome}
              </p>
              <p id="restaurantes_info_paragrafo-descricao" key={restaurante.descricao}>
                {restaurante.descricao}
              </p>
            </div>
            <button id='button-excluir' onClick={() => removerItem(restaurante.id)}>X</button>
          </section>
      ))}
    </div>

  )
}

export default ListarRestaurantes;
```
* O lista.map está listando todos os elementos da lista `restaurantes` do arquivo `App.js` na tela do usuário.