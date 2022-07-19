import React from "react";
import Footer from "./Footer";
import Navmain from "./NavMain";
import { useParams, Link} from "react-router-dom";
import product_1 from '../img/product-1.png'
import product_2 from '../img/product-2.png'
import product_3 from '../img/product-3.png'
import product_4 from '../img/product-4.png'
import cart_3 from '../img/cart-3.png'
import cart_2 from '../img/cart-2.png'
import new_1 from '../img/new-1.png'
import new_2 from '../img/new-2.png'
import new_6 from '../img/new-6.png'
import ItemCount from "./ItemCount";
const DetailItem = ()=>{
    const {id}= useParams();
    const product = [{
        price: 7000,
        id: 1,
        details: "un saco perfecto para invierno hecho de las mejores telas",
        title: "Saco",
        img: product_1,
        stock: 3,
    },
    {
        price: 6000,
        id: 2,
        details: "Campera negra con gorro y cierre",
        title: "Campera",
        img: product_2,
        stock: 2,
    },
    {
        price: 3500,
        id: 3,
        details: "remera con rallado horizontal blanco y negro",
        title: "Remera",
        img: product_3,
        stock: 5,
    },
    {
        price: 10500,
        id: 4,
        details: "campera gris impermeable y con rompe viento",
        title: "Campera Impermiable",
        img: cart_3,
        stock: 4,

    },
    {
        price: 4500,
        id: 5,
        details: "sueter con patron abstracto entre rojo y azul",
        title: "Sueter",
        img: cart_2,
        stock: 3,
    },
    {
        price: 9000,
        id: 6,
        details: "abrigo de invierno impermiable",
        title: "Abrigo de Invierno",
        img: new_1,
        stock: 7,
    },
    {
        price: 11000,
        id: 7,
        details: "campera hasta las rodillas rosa y abrigada",
        title: "Campera Extensa",
        img: product_4,
        stock: 2,

    },
    {
        price: 10500,
        id: 8,
        details: "campera Nike deportiva con tecnologia especializada para la transpiracicon",
        title: "Campera nike",
        img: new_6,
        stock: 4,

    },
    {
        price: 13500,
        id: 9,
        details: "campera jordan negra con mangas rojas",
        title: "Campera deportiva Jordan",
        img: new_2,
        stock: 3,

    }
];

    return(<>
        <Navmain></Navmain>
        <div>
            {product
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
                    <p className="detail_price">${product.price}</p>
                    <ItemCount 
                        stock={product.stock} 
                        initial={1}
                        onAdd={(n) => alert(`Agregaados ${n} productos`)}
                        price={product.price}>   
                    </ItemCount> 
                    </div>
                    <button className="product_button detial_button"><Link to={`/product/${id}/cart`}className="button_link">Comprar</Link></button>
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