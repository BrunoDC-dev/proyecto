import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc }from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAzjO0Quku2T7XrVnAhxqyZbzcaCH7buLY",
  authDomain: "coderhouse-e-comerce.firebaseapp.com",
  projectId: "coderhouse-e-comerce",
  storageBucket: "coderhouse-e-comerce.appspot.com",
  messagingSenderId: "1079722329171",
  appId: "1:1079722329171:web:f9ab4c0d8a56554c9db2a6",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const colRef = collection(db,'items');

export const sendOrder = (item, nameValue, phoneValue, emailValue) => {
  const db = getFirestore();
  const ordersCollection = collection(db, "orders");
  const order = {
    buyer: [{ name: nameValue, phoneNumbre: phoneValue, email: emailValue }],
    items: item,
  };
  addDoc(ordersCollection, order).then(console.log(order));
};
