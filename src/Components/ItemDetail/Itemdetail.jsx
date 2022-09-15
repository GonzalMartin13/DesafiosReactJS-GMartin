import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
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

                <ItemCount cantidad={item.cantidad} initial={0} />
            </div>
        </div>
    )
}

export default ItemDetail;