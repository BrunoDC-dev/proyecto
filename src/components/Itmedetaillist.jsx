import React from "react";
import ItemDetailinfo from "./ItemDetailinfo";
const ItemDetailList = ({ producto, id }) => {
  return (
    <div>
      {producto
        .filter((product) => product.id == id)
        .map((product) => (
          <ItemDetailinfo key={product.id} product={product} />
        ))}
    </div>
  );
};
export default ItemDetailList;