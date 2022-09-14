import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (item) => {
    return (
        <div className="detail">
            <img src={item.img} alt={item.nombre} />
            <div className="infoDetail">
                <h2>{item.nombre}</h2>
                <p>
                    {item.descripcion}
                    {item.duracion}
                    
                </p>
                <h3>${item.precio}.-</h3>

                <ItemCount cantidad={item.cantidad} initial={0} />
            </div>
        </div>
    )
}

export default ItemDetail;