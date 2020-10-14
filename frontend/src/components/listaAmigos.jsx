import React from 'react';
import RowAmigo from './rowAmigo';
import '../styles/listaAmigos.css';

const ListaAmigos = ({amigos, funcionDeMatch, escribirResultado}) => { 
     
    return(
        <div className="lista">
        <h3>Participantes : </h3>
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table class="table table-bordered table-striped mb-0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Dato</th>
                </tr>
            </thead>
            <tbody>
                {amigos.map( (amigo) => <RowAmigo num={amigo.num} nombre={amigo.nombre} dato={amigo.dato} key={amigo.num}/> )}
            </tbody>
        </table>

        </div>
            <button onClick={ () => (escribirResultado(funcionDeMatch(amigos)))}>Terminar inscripciones</button>
        </div>
    );
};

export default ListaAmigos;