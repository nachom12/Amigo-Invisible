import React from 'react';
import '../styles/ingresoAmigos.css';
// import ListaAmigos from './listaAmigos';

const IngresoAmigos = ({listaActual, handlerAmigos}) => (
    <div className="formAmigo">
        <input className="inputData" id="nombreAmigo" placeholder="Nombre"></input>
        <input className="inputData" id="mailAmigo" placeholder="Mail"></input>
        
        <button type="button" 
            onClick= { () => handlerAmigos([
                {
                    num:listaActual.length+1, 
                    nombre: document.getElementById("nombreAmigo").value, 
                    dato:document.getElementById("mailAmigo").value}, 
                    ...listaActual
                ])}
        >
            
            Ingreso
        </button>
    </div>
);

export default IngresoAmigos;