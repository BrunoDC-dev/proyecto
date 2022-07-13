import React from "react";
import DetailItem from "./Itemdetail";

const Item = ({ product })=>{
    const{img, title, details,price} = product;
    return(
        
        <div className="product-box">
            <div>
            <img src={img} alt={title} />
            </div>
            <h2 className="title_product">{title}</h2>
            <div className="product-details">
            <DetailItem 
            price={price}
            details={details}></DetailItem>
            </div>
        </div>
    )
}
export default Item