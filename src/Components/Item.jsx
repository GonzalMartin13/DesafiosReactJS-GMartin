import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer/ITC.css";
import {CartContext} from "../Context/CartContext"

const Item = ({ID, nombre, IMG, descripcion, precio, stock}) => {

    return (
        <div className="bg-info Items m-3 p-3">
            <div className="card">
                <Link to={ID}> <img src={IMG} className="card-img-top imagen" alt={nombre} /> </Link>
                <div className="card-body">
                    <Link><h5 className="card-title text-center">{nombre}</h5></Link>
                    <p className="card-text text-center">{descripcion} </p>
                </div>
            </div>
        </div>
    )
}

export default Item;