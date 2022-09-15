import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/Itemdetail";
import {prods} from "../productos";

const IDC = () => {    
    const [product, setProduct] = useState({});

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
