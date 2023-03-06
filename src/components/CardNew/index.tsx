import React from "react";

import styled from "./styled.module.css";
import Image, { StaticImageData } from "next/image";

interface props {
  srcImg: string | StaticImageData;
  title: string;
  subtitle: string;
}

export default function CardNew(props: props) {
  return (
    <div className={styled.containerCard}>
      <picture className={styled.picture}>
        <Image
          className={styled.img}
          src={props.srcImg}
          alt={props.title}
        ></Image>
      </picture>
      <div className={styled.containerText}>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </div>
  );
}
