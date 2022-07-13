import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./Itemlist";
import getData from "../data";
const Cartnumber = ()=>{
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("products: ", products);
  useEffect(() => {
    getData
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
    return(
            <div className="contador">
            <ItemCount 
                stock={5} 
                initial={1}
                onAdd={(n) => alert(`Agregaados ${n} productos`)}
            ></ItemCount> 
            <div className="prodcut_list">
             {loading ? <span>Loading...</span> : <ItemList products={products} />}
            </div>
            </div>
            
    );
};
export default Cartnumber;