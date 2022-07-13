import React from "react";

const DetailItem = (props)=>{
    return(
        
        <div>
            <p className="details_product">Detalles:</p>
            <p>{props.details}</p>
            <div className="product_price">
                <p>${props.price}</p>
                <button className="product_button">Comprar</button>
            </div>
        </div>
    )
}
export default DetailItem