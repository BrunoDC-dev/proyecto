import React from "react";
import Footer from "./Footer";
import Navmain from "./NavMain";
import { useParams} from "react-router-dom";
const DetailItem = ()=>{
    const {id}= useParams();
    const product = [{
      price: 7000,
      id: 1,
      details: "un saco perfecto para invierno hecho de las mejores telas",
      title: "Saco",
  },
  {
      price: 6000,
      id: 2,
      details: "Campera negra con gorro y cierre",
      title: "Campera",
  },
  {
      price: 3500,
      id: 3,
      details: "remera con rallado horizontal blanco y negro",
      title: "Remera",
  },
  {
      price: 10500,
      id: 4,
      details: "campera gris impermeable y con rompe viento",
      title: "Campera Impermiable",
       },
  {
      price: 4500,
      id: 5,
      details: "sueter con patron abstracto entre rojo y azul",
      title: "Sueter",
       },
  {
      price: 9000,
      id: 6,
      details: "abrigo de invierno impermiable",
      title: "Abrigo de Invierno",
    },
  {
      price: 11000,
      id: 7,
      details: "campera hasta las rodillas rosa y abrigada",
      title: "Campera Extensa",
      },
  {
      price: 10500,
      id: 8,
      details: "campera Nike deportiva con tecnologia especializada para la transpiracicon",
      title: "Campera nike",
    },
  {
      price: 13500,
      id: 9,
      details: "campera jordan negra con mangas rojas",
      title: "Campera deportiva Jordan",
    }
];
    return(<>
        <Navmain></Navmain>
        <div>
            {product
            .filter(product=> product.id === id)
            .map((product, index)=>(
              <div key={index}>
              <h1>{product.title}</h1>
              <p>{product.details}</p>
              <p>{product.price}</p>
              <img src={product.img} alt={product.title} />
               </div>
                   
              ))}
        </div>
        <Footer></Footer>
    </>
    )
}
export default DetailItem