import React from "react";
import Cartnumber from "./Itemlistcontainer";
const Cart = ()=>{
    return(
        <div class="nav_btns">
        <div class="login_toggle" id="login-button">
            <i class="bx bx-user"></i>
        </div>
        <div class="nav_shop" id="cart-shop">
            <Cartnumber numbers="4"></Cartnumber>
        </div>
    </div>
    );
};
export default Cart;