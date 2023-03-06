import React from "react";
import CardSimple from "../CardSimple";

import styled from "./styled.module.css";

import srcImg1 from "../../images/gridCards/card1.jpg";
import srcImg2 from "../../images/gridCards/card2.jpg";
import srcImg3 from "../../images/gridCards/card3.jpg";

export default function GridCards() {
  return (
    <div className={styled.containerGrid}>
      <CardSimple
        title="Meet The Team"
        subtitle="We’re a small team of family and friends dedicated to making your experience a lasting memory."
        srcImg={srcImg1}
      ></CardSimple>
      <CardSimple
        title="Our Services"
        subtitle="We’ll prepare you for a wilderness adventure by providing the best camping equipment available."
        srcImg={srcImg2}
      ></CardSimple>
      <CardSimple
        title="Our Company"
        subtitle="Our company gives back to the environment by planting a tree for each new adventure."
        srcImg={srcImg3}
      ></CardSimple>
    </div>
  );
}
