import React from "react";
import Cartnumber from "./Itemlistcontainer";
const Cart = ()=>{
    return(
        <div class="nav_btns">
        <div class="login_toggle" id="login-button">
            <i class="bx bx-user"></i>
        </div>
        <div class="nav_shop" id="cart-shop">
            <i class="bx bx-shopping-bag"></i>
        </div>
    </div>
    );
};
export default Cart;