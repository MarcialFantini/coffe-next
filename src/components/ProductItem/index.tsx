import React from "react";
import styled from "./styled.module.css";
import Image from "next/image";

import imgDefault from "../../images/product/productDefault.jpg";

export default function ProductItem() {
  return (
    <div className={styled.cardContainer}>
      <picture className={styled.picture}>
        <Image className={styled.img} alt="product" src={imgDefault}></Image>
      </picture>
      <h2 className={styled.titleProduct}>Title of the product</h2>
      <p className={styled.text}>$6.00-$15.00</p>

      <button className={styled.button}>VIEW PRODUCTS</button>
    </div>
  );
}
