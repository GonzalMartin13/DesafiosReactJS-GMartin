import React from "react";

const Item = ({ID, nombre, IMG, descripcion, precio}) => {
    return (
        <div className="col-md-6 bg-dark">
            <div className="card mx-5 my-3 ">
                <img src={IMG} className="card-img-top bg-light" alt={nombre} />
                <div className="card-body">
                    <h5 className="card-title text-center">{nombre}</h5>
                    <p className="card-text text-center">{descripcion} </p>
                    <p className="card-text text-center">$ {precio} </p>
                </div>
            </div>
        </div>
    )
}

export default Item;