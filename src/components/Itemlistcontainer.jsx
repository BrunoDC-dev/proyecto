import React,{useContext} from "react";
import ItemList from "./Itemlist";
import CartContext from "../context/CartContext";
const Cartnumber = ()=>{
  const {loading, producto} = useContext(CartContext);
    return(
            <div className="contador">
            <div className="prodcut_list">
             {loading ? <span>Loading...</span> : <ItemList products={producto} />}
            </div>
            </div>
    );
};
export default Cartnumber;