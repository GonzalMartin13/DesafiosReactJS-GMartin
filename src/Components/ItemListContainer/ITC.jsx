import React from "react";
import "../ItemListContainer/ITC.css";
import IL from "../ItemList/ItemList";
import { useState } from "react";
import { useEffect } from "react";
import {prods} from "../productos";


 const ITC = () => {

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
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
        </div>
    )
    
}

export default ITC;
