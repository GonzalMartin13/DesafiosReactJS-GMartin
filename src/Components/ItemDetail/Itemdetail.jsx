import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div key={item.ID} className="text-center">
            <img src={item.img} alt={item.nombre} />
            <div className="infoDetail">
                <Link to="/cursos/ID"><h2>{item.nombre}</h2></Link>
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