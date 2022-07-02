import React from "react";
import ItemCount from "./ItemCount";
const Cartnumber = ()=>{
    return(
            <div className="contador">
            <ItemCount 
                stock={5} 
                initial={1}
                onAdd={(n) => alert(`Agregaados ${n} productos`)}
            ></ItemCount>
            </div>
    );
};
export default Cartnumber;