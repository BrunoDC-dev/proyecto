import React from "react";
import AboutImg from "../../img/about-img.jpg";
const AboutUsInfo = () => {
  return (
    <section class="about section container">
      <h2 class="breadcrumb__title">Sobre Nosotros</h2>
      <h3 class="breadcrumb__subtitle">
        Inicio {`>`} <span>Nosotros</span>
      </h3>
      <div class="about_container grid">
        <img src={AboutImg} alt="" class="about_img" />
        <div class="about_data">
          <h2 class="section__title about_title">
            Quien somos realmente & <br />
            Porque elegirnos
          </h2>
          <p class="about_description">
            Tenemos alrededor de 1000+ reviews positivas y nuestors consumidores
            confian en nuestros productos y nuestros metodos de envio siempre
          </p>
          <p class="about_details-description">
            <i class="bx bxs-check-square about_details-icon"></i> Nosotros
            siempre entregamos a tiempo
          </p>
          <p class="about_details-description">
            <i class="bx bxs-check-square about_details-icon"></i> te Damos
            guias donde detallamos el cuidado de los productos
          </p>
          <p class="about_details-description">
            <i class="bx bxs-check-square about_details-icon"></i> Rembolso 100%
            garantizado
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutUsInfo;
