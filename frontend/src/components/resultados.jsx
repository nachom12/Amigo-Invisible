import React from 'react';
import '../styles/resultados.css'
import RowResultado from '../components/rowResultado';

const Resultados = ({resultados}) => (
    <div className="resultados">
        <h3>Resultados:</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Jugador</th>
                <th scope="col">Amigo Invisible</th>
                </tr>
            </thead>
            <tbody>
                {resultados.map( (resultado) =>  <RowResultado jugador={resultado.jugador} amigoInvisible={resultado.amigo} />)}
            </tbody>
        </table>
    </div>
);

export default Resultados;