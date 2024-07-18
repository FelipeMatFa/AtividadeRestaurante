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