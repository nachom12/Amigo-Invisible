import React from 'react';
import '../styles/listaAmigos.css'



const ListaAmigos = () => (
    <div className="lista">
        <h3>Participantes : </h3>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">mail</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>nacho</td>
                <td>jmedina@</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>albert</td>
                <td>acruzdg@</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>adolfo</td>
                <td>adolfopz@</td>
                </tr>
            </tbody>
        </table>
        <button>Terminar inscripciones</button>
    </div>
);

export default ListaAmigos;