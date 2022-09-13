import React from "react";
import "../ItemListContainer/ITC.css";
import IL from "../ItemList/ItemList";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";


 const ITC = () => {

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        const prods = [
            { "ID": 13, "nombre": "Html + Css", "duracion": "16 Semanas", "precio": 37500, "IMG": "", "descripcion": "Vas a aprender a desarroyar y diseñar una web" },
            { "ID": 7, "nombre": "Javascript", "duracion": "20 Semanas", "precio": 50000, "IMG": "", "descripcion": "Vas a poder crear apps que interactuen con el usuario" },
            { "ID": 20, "nombre": "React + NodeJS", "duracion": "16 Semanas", "precio": 32000, "IMG": "", "descripcion": "Lleva javascript al proximo nivel y covnertite en Front End"},
            { "ID": 27, "nombre": "Carrera BackEnd", "duracion": "24 Semanas", "precio": 60000, "IMG": "", "descripcion": "Aprende lo basico del BackEnd" }
        ];

        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() =>{
                resolve(prods);
            }, 2000);
        });

        promesa.then((respuesta) => {
            setCursos(respuesta);
        });

    }, []);

    return (
        <div>
            <IL productos={cursos}/>
            <ItemCount/>
        </div>
    )
    
}

export default ITC;
