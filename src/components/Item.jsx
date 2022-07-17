import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product })=>{
    const{id,img, title,} = product;
    return(
        
        <div className="product-box">
            <div>
            <img src={img} alt={title} />
            </div>
            <h2 className="title_product">{title}</h2>
            <div className="product-details">
            <button><Link to={`/product/${id}`}> Ver detalles del producto</Link></button>
            </div>
        </div>
    )
}
export default Item