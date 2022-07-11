import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./Itemlist";
import getData from "../data";
import NewItemList from "./Newitemlist";
import getNewproduct from "../ItemDetail";
const Cartnumber = ()=>{
  const [Newproducts, setnewproducts] = useState([]);
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("products: ", products);
  useEffect(() => {
    getNewproduct
      .then((data) => {
        setnewproducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
            <div>
              {loading ? <span>Loading...</span> : <NewItemList Newproducts={Newproducts} />}
            </div> 
            <div>
             {loading ? <span>Loading...</span> : <ItemList products={products} />}
            </div>
            </div>
            
    );
};
export default Cartnumber;