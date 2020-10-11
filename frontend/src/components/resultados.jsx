import React from 'react';
import '../styles/resultados.css'

const Resultados = () => (
    <div className="resultados">
        <h3>Resultados:</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Regalante</th>
                <th scope="col">Regalado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">nacho</th>
                <td>adolfo</td>
                </tr>
                <tr>
                <th scope="row">adolfo</th>
                <td>albert</td>
                </tr>
                <tr>
                <th scope="row">albert</th>
                <td>nacho</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default Resultados;