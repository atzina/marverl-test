import { useEffect, useState } from "react";

import {PUBLIC_KEY, HASH, TS} from "../const/api"


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

            <div>
                {personajes.map(personaje=>(
                    <div key={personaje.id}>
                        <img src={personaje.thumbnail.path+'.'+personaje.thumbnail.extension}></img>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Inicio;