import React, { useState } from "react";

const ItemCount = ({initial, cantidad}) => {
    const [inicial, setInicial] = useState(initial);
    const [stock, setStock] = useState(cantidad);

    const Sumar = (valor1, valor2) => {
        if (valor1 < cantidad){
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


    return(
        <div className="text-center ">
            <p>Suma tus unidades!</p>
            <div>
                <button onClick={() => {Restar (inicial, stock)}}> - </button>
                <input type="text" value={inicial} className="text-center" />
                <button onClick={() => {Sumar(inicial, stock)}}> + </button>
            </div>
            <p>Cantidad disponible: {stock}</p>
            <button className="mt-2">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount; 