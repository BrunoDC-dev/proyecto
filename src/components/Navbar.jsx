import React from "react";
import { Link } from "react-router-dom";
const menuItems= [
    { 
        id:"2",
        label:"Abrigos",
    },
    { 
        id:"3",
        label:"Buzos",
    },
    { 
        id:"5",
        label:"Remeras",
    },
];
const NavBar = ()=>{
    return(
                <ul class="nav_list">
                    {menuItems.map((item)=>(
                        <li class="nav_item">
                        <Link to={`/producto/${item.label}`} class="nav_link " key={item.id}>{item.label}</Link>
                        </li> 
                    ))}
                </ul>
    );
};
export default NavBar;