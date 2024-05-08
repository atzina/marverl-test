import { useEffect, useState } from "react";

import {PUBLIC_KEY, HASH, TS} from "../const/api";
import "./inicio.css";


function Inicio () {

//traer url de personajes
//    http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=$`{PUBLIC_KEY}&hash=${HASH}


//LISTA DE LOS PERSONAJES DE MARVERL
// Hacer un estado para traer personajes
const[personajes, setPersonaje]= useState([])

// Hacer una función para la petición a la Api de los personajes
const getPersonajes = async (url) => {
    const resp = await fetch(url);
    const json = await resp.json();
    //console.log(json);
    setPersonaje(json.data.results)
}

console.log('personajes',personajes)

// Usar useEffect para traer los personajes
useEffect(()=>{
    getPersonajes(`http://gateway.marvel.com/v1/public/characters?ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`)
}, [])
// Retornalos para que aparezcan en la interfaz -
// trabajar en su css

    return (
        <>
            <h1>Personajes de Marvel</h1>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {personajes.map(personaje=>(
                    <div key={personaje.id} className="col mb-4">
                                <div className = "card h-100">
                                    <img src={personaje.thumbnail.path+'.'+personaje.thumbnail.extension} className="img-fluid"></img>
                                    <div className="card-body">
                                    <h5 className="card-title">{personaje.name}</h5>
                                    <p className="card-text">{`${'Present in'} ${personaje.comics.available} ${'comics'}`}</p>
                                </div>
                           
                        
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Inicio;