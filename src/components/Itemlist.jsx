import React from "react";
import Item from "./Item";
import data from "../data";

const  ItemList = ()=>{
    console.warn(data.prodcutData)
    return(
        <div>
           <h1>Todos los productos</h1>
           <div>
                {data.prodcutData.map((item, index)=>{
                    return(
                        <Item pictureUrl={item.img} title={item.title} price={item.price} key={index}></Item>
                    )
                })}
           </div>
    </div>
    );
}
export default ItemList