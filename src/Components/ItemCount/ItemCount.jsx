import React, { useState } from "react";

const ItemCount = ({initial, cantidad}) => {
    const [inicial, setInicial] = useState(initial);
    const [stock, setStock] = useState(cantidad);


    return(
        <div className="text-center">
            <p>Suma tus unidades!</p>
            <div>
                <button onClick={
                    () => { 
                        if ({inicial} !== 0 && {stock} !== 0){
                        setInicial(inicial -1 )
                        setStock(stock +1)
                        }
                    }
                } > - </button>
                <input type="text" value={inicial} className="text-center" />
                <button onClick={
                    () => {
                        if ({inicial} !== 0 && {stock} !== 0){
                            setInicial(inicial +1 )
                            setStock(stock -1)
                            };
                    }
                }> + </button>
            </div>
            <p>Cantidad disponible: {stock}</p>
            <button className="mt-2">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount; 