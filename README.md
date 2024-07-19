# Documentação de projeto em React

Esse projeto foi desenvolvido com [React](https://github.com/facebook/create-react-app).

## Primeiros comandos

Para criar um projeto React:

```
npx create-react-app nome_do_projeto
```

Caso você apenas faça clone desse projeto você deve executar o comando abaixo:

```
npm i
```

## Componentes

Crie uma pasta dentro da pasta `SRC`, chamando ela de components, e dentro dessa pasta criada você pode criar os seus componentes colocando `nome_do_componente.jsx` ou digite o comando abaixo

```
mkdir src/components
```
```
touch src/components/Nome_do_componente.jsx
```

### Estrutura dos components

Para mandar um retorno para a tela do usuário você deve seguir a seguinte estrutura abaixo:
```
function Meu_componente() {

    return (
        <div>
            <h1>Olá mundo!</h1>
        </div>
    );
}

export default Meu_componente;
```
Então no arquivo App.js coloque:
```
import './App.css';
import Meu_componente from './components/Nome_do_componente';

function App() {
  return (
    <Meu_componente />
  );
}

export default App;

```

## Como o projeto foi feito

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
(continuação)
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