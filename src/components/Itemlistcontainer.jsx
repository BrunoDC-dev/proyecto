import React, { useEffect, useState } from "react";
import ItemList from "./Itemlist";
import {initializeApp} from 'firebase/app'
import{collection,getDocs,getFirestore} from 'firebase/firestore'
const Cartnumber = ()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyAzjO0Quku2T7XrVnAhxqyZbzcaCH7buLY",
    authDomain: "coderhouse-e-comerce.firebaseapp.com",
    projectId: "coderhouse-e-comerce",
    storageBucket: "coderhouse-e-comerce.appspot.com",
    messagingSenderId: "1079722329171",
    appId: "1:1079722329171:web:f9ab4c0d8a56554c9db2a6"
  };
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
  const [loading, setLoading] = useState(true);
    return(
            <div className="contador">
            <div className="prodcut_list">
             {loading ? <span>Loading...</span> : <ItemList products={producto} />}
            </div>
            </div>
    );
};
export default Cartnumber;