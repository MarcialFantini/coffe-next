import React from "react";

import styled from "./styled.module.css";
import ProductItem from "../ProductItem";
const products: string[] = [];

for (let i = 0; i < 12; i++) {
  products.push("");
}

export default function ProductsSide() {
  return (
    <div className={styled.productSide}>
      <h1 className={styled.titleProduct}>PRODUCTS</h1>
      <div className={styled.containerProducts}>
        {products.map((value) => (
          <ProductItem></ProductItem>
        ))}
      </div>
    </div>
  );
}
