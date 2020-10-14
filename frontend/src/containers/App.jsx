import React,{useState} from 'react';
import '../styles/App.css'
import Header from '../components/header';
import IngresoAmigos from '../components/ingresoAmigos';
import ListaAmigos from '../components/listaAmigos';
import Resultados from '../components/resultados';
import Match from '../scripts/match';

// var inicioAmigos = [{nombre: 'Juan', num:1, dato:'eldato'}, {nombre: 'Juan', num:2, dato:'eldato'}];

const App = () => {
    const [listaAmigos, setListaAmigos] = useState([]);
    const [listaResultado, setListaResultado] = useState([{nombre:"nacho", amigo:"adolfo"}, {nombre:"adolfo", amigo:"alberto"}]);
    // console.log(listaAmigos);
    return (
    <>
    <section className='body'>
        <Header/>
        <div className="Ingreso__TablaDatos">
            <IngresoAmigos listaActual={listaAmigos} handlerAmigos={setListaAmigos}/>
            <ListaAmigos amigos={listaAmigos} funcionDeMatch={Match} escribirResultado={setListaResultado}/>
        </div>
        <div className="resultados__container">
            <Resultados resultados={listaResultado}/>
        </div>
    </section>
    </>
)};

export default App;