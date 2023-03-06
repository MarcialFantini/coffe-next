import React from "react";
import ProductsSide from "../ProductsSide";
import FiltersSide from "../FiltersSide";

import styled from "./styled.module.css";

export default function Shop() {
  return (
    <div className={styled.gridContainer}>
      <ProductsSide></ProductsSide>
      <FiltersSide></FiltersSide>
    </div>
  );
}
