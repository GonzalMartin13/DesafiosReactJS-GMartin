import React, { useState } from "react";

const ItemCount = ({initial, cantidad, carro}) => {
    let CantInit= initial;
    const [inicial, setInicial] = useState(initial);
    const [stock, setStock] = useState(cantidad);
    const [carrito, setCarrito] = useState(carro);

    const Sumar = (valor1, valor2) => {
        if (valor1 < stock){
            setInicial(valor1 + 1);
            setStock(valor2 -1);
        }
    }
    const Restar = (valor1, valor2) => {
        if (valor1 > 0 ) {
            setInicial(valor1 -1);
            setStock(valor2 +1);
        }
    }

    const ActualizaCompra = () => {
        setCarrito(inicial + carrito);
        setStock(stock - inicial + initial);
        setInicial(CantInit);

    }

    return(
        <div className="text-center ">
            <p>Suma tus unidades!</p>
            <div>
                <button onClick={() => {Restar (inicial, stock)}}> - </button>
                <input type="text" value={inicial} className="text-center" />
                <button onClick={() => {Sumar(inicial, stock)}}> + </button>
            </div>
            <p>Cantidad disponible: {stock}</p>
            <button onClick={() => {ActualizaCompra()}} className="mt-2">Agregar al carrito</button>
            <p>Elementos cargados al carrito: {carrito}</p>
        </div>
    );
}

export default ItemCount; 