import React from 'react';
import '../styles/botonArmadoJuego.css';
import swal from 'sweetalert';

const BotonArmarJuego = ({numero , amigos, funcionDeMatch, escribirResultado, limpiarLista}) =>{
    if (numero > 2){ 
        return (
            <button className="botonArmadoJuego" onClick={ () => {
                swal({
                    title: "Terminar inscripcion.",
                    text: "Si aceptas, borramos la tabla",
                    icon: "info",
                    buttons: true,
                  })
                  .then((willDelete) => {
                    if (willDelete) {
                        escribirResultado(funcionDeMatch(amigos));
                        limpiarLista([]);
                    } else {
                        swal("Seguimos entonces!", "Puedes seguir agregando ciudadanos!");
                    }
                  });
                }
            }>
                
            Terminar Inscripciones</button>
        );
    }
    else return <p></p>;
};

export default BotonArmarJuego;