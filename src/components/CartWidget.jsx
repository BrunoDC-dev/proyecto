import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
const Cart = ()=>{
    const {items} = useContext(CartContext)
    let itemsInCart = 0;
    items.map((item)=>{
        itemsInCart = itemsInCart + item.qty;
})
    return(
        <div class="nav_btns">
        <div class="login_toggle" id="login-button">
            <i class="bx bx-user"></i>
        </div>
        <div class="nav_shop" id="cart-shop">
          <Link to={'/cart'}><i class="bx bx-shopping-bag"></i></Link>
            <div className="itemsInCart">
                {itemsInCart}
            </div>
        </div>
    </div>
    );
};
export default Cart;