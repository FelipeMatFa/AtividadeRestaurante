/* eslint-disable jsx-a11y/alt-text */
import foto from '../restaurante.png';
import '../style.css'

function ListarRestaurantes({lista}){
  return(
    <div className='div-restaurante'>
      {lista.map(restaurante => (
          <section className='div-restaurante_restaurantes'>
            <img id='foto-restaurante' src={foto}/>
            <div className='restaurantes_info'>
              <h1 key={restaurante.nome}>
                {restaurante.nome}
              </h1>
              <p key={restaurante.descricao}>
                {restaurante.descricao}
              </p>
            </div>
          </section>
      ))}
    </div>

  )
}

export default ListarRestaurantes;