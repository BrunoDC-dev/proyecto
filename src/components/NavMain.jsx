import React from "react";
import Cart from "./CartWidget";
import NavBar from "./Navbar";
const Navmain=()=>{
    return(
        <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav_logo"> <i class="bx bxs-shopping-bags nav_logo-icon"> GUSMY </i> </a>
            <div class="nav_menu" id="nav-menu">
                <NavBar></NavBar>
            </div>
                <Cart></Cart>
        </nav>
    </header>
    );
}
export default Navmain;