import Reactc from "react";
import discount from "../../img/discount.png";
import { Link } from "react-router-dom";
const DiscountAdd = () => {
  return (
    <section class="discount section">
      <div class="discount_container container grid">
        <img src={discount} alt="" class="discount_img" />
        <div class="discount_data">
          <h2 class="discount_title">
            ¡¡¡Nuevos descuentos En Nuestro nuevos productos!!!
          </h2>
          <h3 className="discount_title">OFF SALE %</h3>
          <Link to={"/Tienda"} class="button_home">
            Comprar
          </Link>
        </div>
      </div>
    </section>
  );
};
export default DiscountAdd;
