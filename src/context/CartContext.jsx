
import React, {createContext,useState,useContext} from "react";
import swal from "sweetalert";
const CartContext = createContext({});
export const  CartProvider =({children}) =>{
    const [items, setItems]= useState([])
    const isIncart = (id)=>{
        const found = items.find(item => item.id == id);
        return found
    }
    const addItem = (item,count,result)=>{
        console.log(items)
        isIncart(item.id)
        ?
        setItems(items.map((prod)=>{
            if (prod.id== item.id) {
                prod.qty+=count
                prod.result+=result
            }
            return prod
        }))
        :
        setItems([...items,{id: item.id, img:item.img,result:result, name:item.title,price:item.price,qty:count}])
    }
    const removeItem =(id)=>{
        setItems(items.filter(item=>item.id!==id))
    }
    const clearItems=()=>{
        setItems([]);
    }
    const purchaseitems=()=>{
        setItems([])
        swal({
            title: "Compra realizada",
            text: "Gracias por tu compra",
            icon: "success",
            button: "Continuar",
          });
    }
    let itemsInCart = 0;
    items.map((item)=>{
        itemsInCart = itemsInCart + item.qty;
        })  
    return(
    <CartContext.Provider value={{items, addItem, removeItem,clearItems,purchaseitems, itemsInCart}}>
        {children}
    </CartContext.Provider>
)
}
export default CartContext;