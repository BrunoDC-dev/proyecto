import React, { useContext, } from "react";
import Footer from "./Footer";
import Navmain from "./NavMain";
import { useParams} from "react-router-dom";
import CartContext from "../context/CartContext";
import ItemDetailList from "./Itmedetaillist";
const DetailItem = ()=>{
    const {id}= useParams();
const{producto} = useContext(CartContext)
    return(<>
        <Navmain/>
        <div>
            <ItemDetailList producto={producto} id={id}/>
        </div>
        <Footer/>
    </>
    )
}
export default DetailItem