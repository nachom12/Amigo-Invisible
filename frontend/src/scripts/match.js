export default function Match (personas) { 
    
    const MAX_PERSONAS = 100;
    const personasAux = [...personas]
    var res = [];
    
    for (let i = 0; i < personas.length; i++) {
        if (i == (personas.length-1)){ // soy el ultimo 
            if ((personas[i].nombre == personasAux[0].nombre)) { //solo quedo yo para elegir.
                res[i] = {jugador: personas[i].nombre, amigo: res[i-1].amigo} // el jugador i se queda con el que tenia i-1 que es necesariamente distinto a i porque es el que queda. 
                res[i-1] = {jugador:personas[i-1].nombre, amigo:personasAux[0].nombre} // el jugador i-1 queda con amigo el jugador i.
            }
            else{
                res[i] = {jugador: personas[i].nombre, amigo: personasAux[0].nombre};
            }
        } 
        else {
            let messirve = false;
            while (!messirve){  //my  friend isn't me 
                var num = Math.random();
                num = (Math.floor(num * MAX_PERSONAS))%(personasAux.length); // elijo a alguien al azar de la lista personasAux.
                messirve = (personas[i].nombre != personasAux[num].nombre); // messirve sii es distinto a mi.
            }
            res[i] = {jugador: personas[i].nombre, amigo: personasAux[num].nombre};
            personasAux.splice(num, 1);
        }
    }
    console.log(res);
    return res;
}
 

