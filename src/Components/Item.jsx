import React from "react";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemListContainer/ITC.css";

const Item = ({ID, nombre, IMG, descripcion, precio, stock}) => {
    return (
        <div className="bg-info Items m-3 p-3">
            <div className="card">
                <img src={IMG} className="card-img-top imagen" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center">{descripcion} </p>
                    <p className="card-text text-center"> Precio: ${precio} </p>
                </div>
            </div>
            <ItemCount cantidad={stock} initial={0} carro={0}/>
        </div>
    )
}

export default Item;