import React from 'react';
import './App.css';
import Inicio from './componentes/inicio'
import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import DetallePersonaje from './componentes/detallepersonaje'

// Hacer uno componentes-
// usar router para ponerles una ruta -

// DETALLES DE PERSONAJE

function App() {

  return (
    <>
    <div>
     
        <Routes>
          <Route path= "/" element = {<Inicio/>} />
          <Route path = "/personaje/:id" element = {<DetallePersonaje/>} ></Route>
        </Routes> 
    </div>
    </>
    
  )
}

export default App
