import React from "react";
const Item = (props)=>{
    return(
        <div>
            <img src={props.pictureUrl} alt={props.title} />
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
            <button>Comprar</button>
        </div>
    )
}
export default Item