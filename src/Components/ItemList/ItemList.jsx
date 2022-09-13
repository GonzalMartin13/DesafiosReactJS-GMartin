import React from "react";
import Item from "../item";

const IL = ({productos}) => {
    return (
        <div className="row">
            {productos.map(curso => <Item ID={curso.ID} curso={curso.nombre} IMG={curso.IMG} descripcion={curso.descripcion} precio= {curso.precio} />)};
        </div>
    )
}

export default IL;