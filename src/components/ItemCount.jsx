import React from "react";
import { useState } from "react";
const ItemCount= ({stock,initial,onAdd})=>{
    const[count, setCount] = useState(initial);
    const incrementar = ()=>{
        setCount( count + 1);
    }
    const decrementar = ()=>{
        if (count > 0) {
            setCount( count - 1);   
        }
    }
    return(
            <><div><h3>{count}</h3></div>
            <div><button className="minus" onClick={decrementar}>-</button>
            <button className="result"
            onClick={() => {
                if (count <= stock) {
                    onAdd(count);
                } else {
                    alert("no hay suficientes productos");
                }
            } }>Agregar al carrito</button>
            <button className="add" onClick={incrementar}>+</button>
            </div></>
    );
}
export default ItemCount;