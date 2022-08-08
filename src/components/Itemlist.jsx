import React from "react";
import Item from "./Item";
const  ItemList = ({products})=>{
    return(
        <div>
           <h1 className="itemlist-title">Todos los productos</h1>
           <div className="product-container">
                {products.map((product)=>{
                    return(
                        <Item key={product.id} product={product}/>
                    )
                })}
           </div>
    </div>
    );
}
export default ItemList