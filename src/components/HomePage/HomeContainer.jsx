import React, { useContext } from "react";
import DiscountAdd from "./DiscountsAdd";
import StepsContainer from "./Steps/StepsContainer";
import SwiperProduct from "./SwiperProduct";
const HomeContainer = () => {
  return (
    <>
      <SwiperProduct />
      <DiscountAdd />
      <StepsContainer />
    </>
  );
};
export default HomeContainer;
