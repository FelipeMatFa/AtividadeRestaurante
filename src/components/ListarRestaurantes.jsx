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
              <p key={restaurante.nome}>
                {restaurante.nome}
              </p>
              <p key={restaurante.descricao}>
                {restaurante.descricao}
              </p>
              <button onClick={() => removerItem(restaurante.id)}>X</button>
            </div>
            
          </section>
      ))}
    </div>

  )
}

export default ListarRestaurantes;