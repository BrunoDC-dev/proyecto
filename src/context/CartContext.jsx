
import React, {createContext,useState, useEffect} from "react";
import {initializeApp} from 'firebase/app'
import {
  collection,
  getFirestore,
  addDoc,
  getDocs
} from 'firebase/firestore';
import swal from "sweetalert";
import getData from "../data";
const CartContext = createContext({});
export const  CartProvider =({children}) =>{
    const [items, setItems]= useState([])
    const[producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true);
    const isIncart = (id)=>{
        const found = items.find(item => item.id == id);
        return found
    }
    const addItem = (item,count,result,price)=>{
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
    const firebaseConfig = {
        apiKey: "AIzaSyAzjO0Quku2T7XrVnAhxqyZbzcaCH7buLY",
        authDomain: "coderhouse-e-comerce.firebaseapp.com",
        projectId: "coderhouse-e-comerce",
        storageBucket: "coderhouse-e-comerce.appspot.com",
        messagingSenderId: "1079722329171",
        appId: "1:1079722329171:web:f9ab4c0d8a56554c9db2a6"
      };
      const app = initializeApp(firebaseConfig);
        useEffect(()=>{
          const db = getFirestore(app);
          const colRef = collection(db,'items');
          getDocs(colRef).then((snp)=>{
              setProducto(snp.docs.map((doc)=>({...doc.data()})))
          })
          .finally(()=>{
          setLoading(false)
          })
        })
      const SendOrder=(item,nameValue,phoneValue,emailValue)=>{
        const db = getFirestore();
        const ordersCollection= collection(db,"orders");
        const order={
          buyer:[{name:nameValue,phoneNumbre:phoneValue,email:emailValue}],
          items:item,
        };
        addDoc(ordersCollection, order).then(console.log(order))
      }
      
    const purchaseitems=(items,nameValue,phoneValue,emailValue)=>{
        SendOrder(items,nameValue,phoneValue,emailValue);
        setItems([]);
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
        });
          
    return(
    <CartContext.Provider value={{items, addItem, removeItem,clearItems,purchaseitems, itemsInCart, producto,loading}}>
        {children}
    </CartContext.Provider>
)
}
export default CartContext;