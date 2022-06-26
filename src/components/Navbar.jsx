import React from "react";
const menuItems= [
    { 
        id:"1",
        label:"Inicio",
    },
    { 
        id:"2",
        label:"Tienda",
    },
    { 
        id:"3",
        label:"Carrito",
    },
    { 
        id:"5",
        label:"Contacto",
    },
];
const NavBar = ()=>{
    return(
                <ul class="nav_list">
                    {menuItems.map((item)=>(
                        <li class="nav_item">
                        <a href="#" class="nav_link " key={item.id}>{item.label}</a>
                        </li> 
                    ))}
                </ul>
    );
};
export default NavBar;