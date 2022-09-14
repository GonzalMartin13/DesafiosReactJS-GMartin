import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/Itemdetail";


const IDC = () => {
    const [product, setProduct] = useState({})
    const prods = [
        { "cantidad": 5, "ID": 13, "nombre": "Html + Css", "duracion": "16 Semanas", "precio": 37500, "IMG": "https://thumbs.dreamstime.com/b/icono-aislado-desarrollo-web-negro-del-vector-ejemplo-simple-elemento-de-iconos-lanzamiento-concepto-dise%C3%B1o-editable-s%C3%ADmbolo-143598660.jpg", "descripcion": "Vas a aprender a desarroyar y diseñar una web" },
        { "cantidad": 4, "ID": 7, "nombre": "Javascript", "duracion": "20 Semanas", "precio": 50000, "IMG": "https://us.123rf.com/450wm/wikagraphic/wikagraphic2011/wikagraphic201130562/159405373-letra-inicial-js-logotipo-nombre-de-la-empresa-color-azul-swoosh-concepto-de-dise%C3%B1o-logotipo-vectori.jpg?ver=6", "descripcion": "Vas a poder crear apps que interactuen con el usuario" },
        { "cantidad": 8, "ID": 20, "nombre": "React + NodeJS", "duracion": "16 Semanas", "precio": 32000, "IMG": "https://gonzalmartin13.github.io/Proyecto-Final-Martin-Campo-Gonzalo/Assets/IMG/Respaldos.jpg", "descripcion": "Lleva javascript al proximo nivel y covnertite en Front End"},
        { "cantidad": 10, "ID": 27, "nombre": "Carrera BackEnd", "duracion": "24 Semanas", "precio": 60000, "IMG": "https://fondosmil.com/fondo/28462.jpg", "descripcion": "Aprende lo basico del BackEnd" }
    ];

    useEffect(()=>{
        const getProduct = () => 
            new Promise ((res, rej) =>{
                const cursos = prods.find((producto) => producto.ID === 13);
                setTimeout (() =>{
                    res(cursos);
                }, 2000);
            });

            getProduct()
            .then ((data)=>{
                setProduct(data)
            })
            .catch ((error) =>{
                alert ("ERROR")
            })
    }, []);

    return(
        <div>
            <ItemDetail item={product}/>

        </div>

    );
};

export default IDC;
