import React from 'react';
import './App.css';
import Inicio from './componentes/inicio'
import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// Hacer uno componentes-
// usar router para ponerles una ruta -


//LISTA DE LOS PERSONAJES DE MARVERL
// Hacer un estado para traer personajes
// Hacer una función para la petición a la Api de los personajes
// Usar useEffect para traer los personajes
// Retornalos para que aparezcan en la interfaz
// trabajar en su css

// DETALLES DE PERSONAJE

function App() {

  return (
    <>
    <div>
     
        <Routes>
          <Route path= "/" element = {<Inicio/>} />
        </Routes> 
    </div>
    </>
    
  )
}

export default App
