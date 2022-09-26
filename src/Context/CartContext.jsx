import React from "react";
import { useState, useContext } from "react";
export const CartContext = React.createContext([]);

export const useContextoCarro = () => useContext(CartContext); 

const CartProvider = ({children}) => {
    const [carro, setCarro] = useState ([]);

    const agregarCarro = (item, nuevaCantida) =>{
        const carrito = carro.filter(prod => prod.id !== item.id);
        carrito.push({...item, cantidad: nuevaCantida });
        setCarro(carrito)
    }

    const vaciarCarro = () => setCarro([]);

    const duplicadoCarro = (id) => carro.find(prod => prod.id === id) ? true : false;

    const borrarCarro = (id) => setCarro(carro.filter(prod => prod.id !== id));
    

    return(
        <CartContext.provider value={{agregarCarro, vaciarCarro, duplicadoCarro, borrarCarro}}>
            {children}
        </CartContext.provider>
    )
}

export default CartProvider;