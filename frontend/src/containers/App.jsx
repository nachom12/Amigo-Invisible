import React from 'react';
import '../styles/App.css'
import Header from '../components/header';
import IngresoAmigos from '../components/ingresoAmigos';
import ListaAmigos from '../components/listaAmigos';
import Resultados from '../components/resultados';


const App = () => {
    return (
    <>
    <section className='body'>
        <Header/>
        <div className="Ingreso__TablaDatos">
            <IngresoAmigos/>
            <ListaAmigos/>
        </div>
        <div className="resultados__container">
            <Resultados/>
        </div>
    </section>
    </>
)};

export default App;