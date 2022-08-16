import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { useParams, Link } from "react-router-dom";
import Navmain from "./NavMain";
import Footer from "./Footer";
const Categorypage = () => {
  const { producto } = useContext(CartContext);
  const { category } = useParams();
  return (
    <>
      <Navmain />
      <div className="contador">
        <div className="prodcut_list">
          <div>
            <h1 className="itemlist-title">{category}</h1>
            <div className="product-container-category">
              {producto
                .filter((product) => product.catetgoryId == category)
                .map((product) => (
                  <div key={product.id} className="product-box">
                    <div>
                      <img src={product.img} alt={product.title} />
                    </div>
                    <h2 className="title_product">{product.title}</h2>
                    <div className="product-details">
                      <button className="button_link">
                        <Link
                          to={`/product/${product.id}`}
                          className="button_link"
                        >
                          {" "}
                          Ver detalles del producto
                        </Link>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Categorypage;
