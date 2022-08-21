import React from "react";
import StepsCard from "./StepsCard";
const StepsContainer = () => {
  return (
    <section class="steps section container">
      <div class="steps_bg">
        <h2 class="section__title">Como comprar Productos desde internet</h2>
        <div class="steps_container grid">
          <StepsCard
            number="1"
            title="Elegi tus Productos"
            desc="Tenemos una amplia variedad de productos de donde elegir, agrega tu producto favorito al carrito y pasa a finalizar la compra."
          />
          <StepsCard
            number="2"
            title="Haga su pedido"
            desc="Una vez tu orden esta hecha, necesitaremos tu nombre, celular y mail para poder validar la informacion. Luego nos movemos al siguiente paso que es la entrega"
          />
          <StepsCard
            number="3"
            title="Tu pedido sera enviado"
            desc="Nuestro metodo de envio es simple, te lo dejamos en directamente en tu casa con un costo $300."
          />
        </div>
      </div>
    </section>
  );
};
export default StepsContainer;
