import React from "react";
import Cart from "./CartWidget";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
const Navmain=()=>{
    return(
        <header class="header" id="header">
        <nav class="nav container">
        <Link to={`/inicio`}class="nav_logo"> <i class="bx bxs-shopping-bags nav_logo-icon"> GUSMY </i></Link>
            <div class="nav_menu" id="nav-menu">
                <NavBar></NavBar>
            </div>
                <Cart></Cart>
        </nav>
    </header>
    );
}
export default Navmain;