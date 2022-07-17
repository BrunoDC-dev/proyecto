import React from "react";
const Footer = ()=>{
    return(
        <footer class="footer section">
        <div class="footer_container container grid">
            <div class="footer_content">
                <a href="#" class="footer_logo">
                    <i class="bx bxs-shopping-bags footer_logo-icon"></i>GUSMY
                </a>
                <p class="footer_description">La mejor compra de tu vida</p>
                <div class="footer_social">
                    <a href="#" class="footer_social-link"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="footer_social-link"><i class="bx bxl-instagram-alt"></i></a>
                    <a href="#" class="footer_social-link"><i class="bx bxl-twitter"></i></a>
                </div>
            </div>
            <div class="footer_content">
                <h3 class="footer_title">Informacion</h3>
                <ul class="footer_links">
                    <li><a href="" class="footer_link">Sobre Nosotros</a></li>
                    <li><a href="#" class="footer_link">Atencion al cliente</a></li>
                    <li><a href="#" class="footer_link">Centro de Atencion</a></li>
                </ul>
            </div>
            <div class="footer_content">
                <h3 class="footer_title">Nuestros servicios</h3>
                <ul class="footer_links">
                    <li><a href="#" class="footer_link">Tienda</a></li>
                    <li><a href="#" class="footer_link">Descuentos</a></li>
                    <li><a href="#" class="footer_link">Metodos de envio</a></li>
                </ul>
            </div>
            <div class="footer_content">
                <h3 class="footer_title">Nuestra compania</h3>
                <ul class="footer_links">
                    <li><a href="#" class="footer_link">Registrate</a></li>
                    <li><a href="#" class="footer_link">Contactanos</a></li>
                    <li><a href="#" class="footer_link">Sobre Nosotros</a></li>
                </ul>
            </div>
        </div>
        <span class="footer_copy">&#169; brunodecruz.05@gmail.com. Todos los derechos reservados</span>
    </footer>

    );
};
export default Footer;