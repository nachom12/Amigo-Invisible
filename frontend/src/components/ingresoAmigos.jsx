import React from 'react';
import '../styles/ingresoAmigos.css';

const IngresoAmigos = () => (
    <div className="formAmigo">
        <input className="inputData" placeholder="Nombre"></input>
        <input className="inputData" placeholder="Mail"></input>
        <button>Ingreso</button>
    </div>
);

export default IngresoAmigos;