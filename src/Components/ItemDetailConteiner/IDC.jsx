import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/Itemdetail";
import {prods} from "../productos";

const IDC = () => {    
    const [product, setProduct] = useState({});
    
    const {id} = useParams();
    console.log= ({id});
    
    const getProduct = (cod) => {
        return new Promise ((res) => {
            setTimeout (() =>{
                res(prods.find((producto) => producto.ID === cod));
            }, 2000)
        }); }
    useEffect(()=>{
        
        getProduct(id).then (data=>{
            setProduct(data)
            })
    }, []);

    return(
        <div>
            <ItemDetail item={product}/>

        </div>

    );
};

export default IDC;
