import React from 'react';
import '../styles/ingresoAmigos.css';
import swal from 'sweetalert';

const IngresoAmigos = ({listaActual, handlerAmigos}) => {
    const NombreValido = (name) => {
        let valid = true;
        for (let i = 0; i < listaActual.length; i++){
            if (listaActual[i].nombre == name)
                valid = false;
                break;
        }
        return valid;
    }

    return (
        <div className="formAmigo">
            <input className="inputData" id="nombreAmigo" placeholder="Nombre"></input>
            <input className="inputData" id="mailAmigo" placeholder="Mail"></input>
            
            <button className="mybutton" 
                onClick= { () => 
                    {
                        let nombreInput = document.getElementById("nombreAmigo").value;
                        let datoInput = document.getElementById("mailAmigo").value;
                        if (NombreValido(nombreInput) && datoInput != ""){
                            handlerAmigos
                                ([
                                    {
                                        num:listaActual.length+1, 
                                        nombre: document.getElementById("nombreAmigo").value, 
                                        dato:document.getElementById("mailAmigo").value 
                                    }, 
                                    ...listaActual 
                                ])
                            document.getElementById("nombreAmigo").value = "";
                            document.getElementById("mailAmigo").value = "";
                            document.getElementById("mailAmigo").style.background = "white";
                        }
                        else if (datoInput == ""){
                            swal('Falta un dato!', 'Necesitamos un dato para ponerlo en contacto.' ,"error");
                            document.getElementById("mailAmigo").style.background = "rgba(255, 0, 0, 0.2)";
                        }
                        else {
                            swal('Ya hay alguien con ese nombre!', ':(' ,"error");
                        }
                    }}>
                Ingreso
            </button>
        </div>
    )
};

export default IngresoAmigos;