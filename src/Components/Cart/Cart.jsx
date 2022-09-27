import React from "react";
import { Link } from "react-router-dom";
import { useContextoCarro } from "../../Context/CartContext";
import CartaCarro from "../CartaCarro/CarroCard";

const Cart = () =>{
    const { carro, precioFinal} = useContextoCarro();

    if (carro === []) {
        return (
            <> <h1>El carrito de compras esta VACIO </h1>
            <Link to ="/index">Seguir Comprando</Link>
            </>
        );
    }

    return ( 
        <div>
            { carro.map(carrito => <CartaCarro prod={carrito}/>)}
        </div>
    )
}

export default Cart;