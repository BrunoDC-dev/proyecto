import React,{useContext} from "react";
import CartContext from "../context/CartContext";
import Footer from "./Footer";
import Navmain from "./NavMain";
const CartPage = ()=>{
    const {items, removeItem, clearItems,purchaseitems}= useContext(CartContext);
    return(
        <>
         <Navmain></Navmain>
         <div className="cart_title">
         <h1 >Tu Carrito:</h1>
         </div>
        <div>
            {items.map((item)=>( 
                <div className="cart_container" key={item.id}>
                    <div className="cart_img_box">
                        <img 
                        src={item.img} 
                        alt={item.name} className="cart_img"/>
                    </div>
                    <div className="cart_info_box">
                        <div className="cart_name_box">
                            <h1>
                                {item.name}
                            </h1>
                            <h2>
                                <span>Precio:</span>  $ {item.price}
                            </h2>
                        </div>
                        <div className="cart_name_box">
                             <h2 className="cart_cantidad">
                                <span>Cantidad:</span> {item.qty}
                            </h2>
                            <h2>
                                <span>Total:</span> ${item.result}
                            </h2>
                        </div>
                        <h2 className="cart_button" onClick={()=>removeItem(item.id)}>Borrar Producto</h2>
                    </div>
                </div>
            ))}
            <div className="clean_box">
            <h2 className="clean_cart" onClick={()=> purchaseitems()}> Finalizar Compra</h2>
            <h2 className="clean_cart" onClick={()=> clearItems()}>Vaciar Carrito</h2>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};
export default CartPage;