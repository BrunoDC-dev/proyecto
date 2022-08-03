
import {
  collection,
  getFirestore,
  addDoc,
} from 'firebase/firestore';
export const SendOrder=(item,nameValue,phoneValue,emailValue)=>{
  const db = getFirestore();
  const ordersCollection= collection(db,"orders");
  const order={
    buyer:[{name:nameValue,phoneNumbre:phoneValue,email:emailValue}],
    items:item,
  };
  addDoc(ordersCollection, order).then(console.log(order))
}
