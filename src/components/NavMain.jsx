import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const Navmain = () => {
  return (
    <header class="header" id="header">
      <nav class="nav container">
        <Link to={`/`} class="nav_logo">
          {" "}
          <i class="bx bxs-shopping-bags nav_logo-icon"> GUSMY </i>
        </Link>
        <div class="nav_menu" id="nav-menu">
          <NavBar />
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};
export default Navmain;
