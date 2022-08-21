import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
const CartWidget = () => {
  const { itemsInCart } = useContext(CartContext);
  return (
    <div class="nav_btns">
      <div class="nav_shop" id="cart-shop">
        <Link to={"/cart/"}>
          <i class="bx bx-shopping-bag"></i>
        </Link>
        <div className="itemsInCart">{itemsInCart}</div>
      </div>
    </div>
  );
};
export default CartWidget;
