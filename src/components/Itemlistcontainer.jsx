import React, { useEffect, useState } from "react";
import ItemList from "./Itemlist";
import getData from "../data";
import {initializeApp} from 'firebase/app'
import{query,collection, doc,getDoc,getDocs,getFirestore} from 'firebase/firestore'
const Cartnumber = ()=>{
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
    setLoading(false)
    })
  })
   /*const [products, setProducts] = useState([]);*/
  const [loading, setLoading] = useState(true);
 /* useEffect(() => {
    getData
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])*/;
    return(
            <div className="contador">
            <div className="prodcut_list">
             {loading ? <span>Loading...</span> : <ItemList products={producto} />}
            </div>
            </div>
    );
};
export default Cartnumber;