import React from "react";
import Item from "../item";
import "../ItemListContainer/ITC.css";

const IL = ({productos}) => {
    return (
        <div className="row">
            {productos.map(curso => (
                <div key={curso.ID} className="col-md-6 bg-dark ">
                    <Item ID={curso.ID} nombre={curso.nombre} IMG={curso.IMG} descripcion={curso.descripcion} precio= {curso.precio} stock={curso.cantidad}/>
                </div>)
                )}
        </div>
    )
}

export default IL;