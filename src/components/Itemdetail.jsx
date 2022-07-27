import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Navmain from "./NavMain";
import { useParams, Link} from "react-router-dom";
import ItemCount from "./ItemCount";
import CartContext from "../context/CartContext";
import {initializeApp} from 'firebase/app';
import{query,collection, doc,getDoc,getDocs,getFirestore} from 'firebase/firestore'
const DetailItem = ()=>{
    const {id}= useParams();
    const firebaseConfig = {
        apiKey: "AIzaSyAzjO0Quku2T7XrVnAhxqyZbzcaCH7buLY",
        authDomain: "coderhouse-e-comerce.firebaseapp.com",
        projectId: "coderhouse-e-comerce",
        storageBucket: "coderhouse-e-comerce.appspot.com",
        messagingSenderId: "1079722329171",
        appId: "1:1079722329171:web:f9ab4c0d8a56554c9db2a6"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
    const[producto, setProducto] = useState([])
    useEffect(()=>{
      const db = getFirestore(app);
      const colRef = collection(db,'items');
      getDocs(colRef).then((snp)=>{
          setProducto(snp.docs.map((doc)=>({...doc.data()})))
      })
      .finally(()=>{
       console.log("terminado")
      })
    })
const {addItem} = useContext(CartContext)

    return(<>
        <Navmain></Navmain>
        <div>
            {producto
            .filter(product=> product.id == id)
            .map((product, index)=>(
              <div key={index} className="continer_detail_product">
                <img className="img_detail" src={product.img} alt={product.title} />
                <div>
                    <div>
                    <h1>{product.title}</h1>
                    </div>
                    <div>
                    <p className="detail_detail">{product.details}</p>
                    <div className="detail_box">
                    <ItemCount 
                        item={product}
                        stock={product.stock} 
                        initial={1}
                        addItem= {addItem}
                        price={product.price}>                  
                    </ItemCount> 
                    </div>
                    </div>
                </div>
               </div>
                   
              ))}
        </div>
        <Footer></Footer>
    </>
    )
}
export default DetailItem