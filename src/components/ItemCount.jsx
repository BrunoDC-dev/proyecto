import React from "react";
import { useState } from "react";
import products from "../detail";
const ItemCount= ({stock,initial,onAdd,price})=>{
    const[count, setCount] = useState(initial);
    const[resutl, setResult]= useState(count*price)
    const incrementar = ()=>{
        if(count < stock) {
            setCount( count + 1);
            setResult((count + 1)*price)
        } else {
            alert("no hay suficientes productos");
        }
    }
    const decrementar = ()=>{
        if (count > 1) {
            setCount( count - 1);   
            setResult((count - 1)*price)
                }
    }
    return(
            <><div className="multiplier">
                <div className="count_box">
                 
                    <h3>x{count}</h3>
                <    button className="minus" onClick={decrementar}>-</button>
                    <button className="result"
                    onClick={() => {
                    if (count <= stock) {
                    onAdd(count);
                    } else {
                    alert("no hay suficientes productos");
                     }
                    } }></button>
                    <button className="add" onClick={incrementar}>+</button>
            
                </div>
                <div className="itemcount">
                    <p>Total:</p>
                    <p>${resutl}</p>
                    <h3>stock: {stock}</h3>
                </div>
            </div>
            </>
    );
}
export default ItemCount;