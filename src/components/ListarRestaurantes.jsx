import foto from '../restaurante.png';
import '../style.css'

function ListarRestaurantes({lista}){

  function remover(id) {
    // lista.splice(id-1)
    // lista.splice(id-1)
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
              <button onClick={remover(restaurante.id)}>X</button>
            </div>
            
          </section>
      ))}
    </div>

  )
}

export default ListarRestaurantes;