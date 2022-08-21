import React from "react";
import FAQItem from "./FAQItem";
const FAQContainer = () => {
  return (
    <section class="questions section container">
      <h2 class="breadcrumb__title">Preguntas Frecuentes</h2>
      <h3 class="breadcrumb__subtitle">
        Inicio {`>`} <span>Preguntas</span>
      </h3>
      <div class="questions_container grid">
        <div class="questions_group">
          <FAQItem
            title="Precio"
            desc="Todos nuestros poductos tienen en su precio considerado el IVA. Actulmente manejmos todos los precios en pesos argentinos."
          />
          <FAQItem
            title="Formas de pago"
            desc="Se acpetan cualquier tipo de tarjetas debito o credito. A demas tambien aceptamos aplicaciones de pago como Mercado Pago. "
          />
          <FAQItem
            title="Materiales"
            desc="Tdoso nuestros productos son de altimsimia calidad con los mejores materiales del mercado, son de extrma fiabilidad."
          />
        </div>
        <div class="questions_group">
          <FAQItem
            title="Tiempo De Entrega"
            desc="Actulmente hacemos envios a todo el pais en caso de estar en CABA o en el AMBA llegaremos en menos de 3 dis laborales en caso de estar fuera de estas zonas el envio pude varia desde una semana hasta 1 mes"
          />
          <FAQItem
            title="Devoluciones"
            desc="Las devoluciones solo seran justificadas una semana desdpues d el entrega, una vez pasado ese plzo ya no se ceptaran devoluciones."
          />
          <FAQItem
            title="Costo de envio"
            desc="Dentro del Amba el costo de envio llega hasta los $300 pesos, fuera del AMBA los precios llegaran hasta los $500 pesos"
          />
        </div>
      </div>
    </section>
  );
};
export default FAQContainer;
