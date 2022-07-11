import React from "react";
import Newitem from "./ItemDetailContainer";
const  NewItemList = ({Newproducts})=>{
    return(
        <div>
           <h1 className="itemlist-title">Novedades</h1>
           <div className="product-container">
                {Newproducts.map((Newproduct)=>{
                    return(
                        <Newitem key={Newproduct.id} Newproduct={Newproduct}></Newitem>
                    )
                })}
           </div>
    </div>
    );
}
export default NewItemList