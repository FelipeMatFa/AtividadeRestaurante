import React, { useRef } from 'react';
import '../style.css';

function AdicionarLugares({ adicionarRestaurante }) {
    const nomeL = useRef(null);
    const descricaoL = useRef(null);

    const click = (e) => {
        e.preventDefault();
        const nome = nomeL.current.value;
        const descricao = descricaoL.current.value;

        adicionarRestaurante({ 
            nome: nome, 
            descricao: descricao 
        });

        nomeL.current.value = '';
        descricaoL.current.value = '';
    };

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