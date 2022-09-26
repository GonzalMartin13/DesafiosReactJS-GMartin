import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContextoCarro } from "../../Context/CartContext";

const ItemDetail = ({item}) => {
    const [goChango, setGoChango] = useState(false);
    const {agregarCarro} = useContextoCarro();

    const onAdd = () => {
        setGoChango(true);
        agregarCarro(item, item.cantidad);      
    }
    return (
            <div key={item.ID} className="text-center">
                <img src={item.IMG} alt={item.nombre} />
                <div className="infoDetail">
                    <h2>{item.nombre}</h2>
                    <p>
                        {item.descripcion} <br/>
                        Duracion: {item.duracion}
                        
                    </p>
                    <h3>Valor: ${item.precio}.-</h3>
                    { goChango ? <Link to="/cart"> Finalizar Compra </Link> :
                    <ItemCount cantidad={item.cantidad} initial={0} carro={0} onAdd={onAdd} /> }
                </div>
            </div>
    )
}

export default ItemDetail;