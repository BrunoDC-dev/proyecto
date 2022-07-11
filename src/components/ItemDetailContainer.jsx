import React from "react";
const Newitem = ({ Newproduct })=>{
    const{img, title,price} = Newproduct;
    return(
        
        <div className="product-box">
            <div>
            <img src={img} alt={title} />
            </div>
            <h2>{title}</h2>
            <div className="product-details">
            <h3>{price}</h3>
            <button>Comprar</button>
            </div>
        </div>
    )
}
export default Newitem