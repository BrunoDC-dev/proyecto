import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./Itemlist";
const Cartnumber = ()=>{
    
    return(
            <div className="contador">
            <ItemCount 
                stock={5} 
                initial={1}
                onAdd={(n) => alert(`Agregaados ${n} productos`)}
            ></ItemCount>
            <ItemList></ItemList>
            </div>
            
    );
};
export default Cartnumber;