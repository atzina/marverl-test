import React from 'react';
import './App.css';
import Inicio from './componentes/inicio'
import {Routes, Route} from "react-router-dom"

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
    <h1> Test </h1>
  

    <div>
     
        <Routes>
          <Route path= "/" element = {<Inicio/>} />
        </Routes> 
    </div>
    </>
    
  )
}

export default App
