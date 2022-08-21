import React from "react";
import Footer from "../Footer/Footer";
import DiscountAdd from "../HomePage/DiscountsAdd";
import Navmain from "../NavBar/NavMain";
import FAQContainer from "./FAQContainer";
const FAQPage = () => {
  return (
    <>
      <Navmain />
      <FAQContainer />
      <DiscountAdd />
      <Footer />
    </>
  );
};
export default FAQPage;
