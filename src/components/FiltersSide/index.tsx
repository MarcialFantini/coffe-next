import React from "react";
import styled from "./styled.module.css";

export default function FiltersSide() {
  return (
    <div className={styled.containerFilters}>
      <form className={styled.form}>
        <input type="text" />
        <button className={styled.btnGo}>Go</button>
      </form>

      <div className={styled.containerCategories}>
        <h2>CATEGORIES</h2>
        <ul>
          <li>Coffee</li>
          <li>Coffee</li>
          <li>Coffee</li>
        </ul>
      </div>
    </div>
  );
}
