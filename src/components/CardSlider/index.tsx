import Image, { StaticImageData } from "next/image";
import React from "react";

import styled from "./styled.module.css";

export interface propsCard {
  title: string;
  subtitle: string;
  src: StaticImageData;
  link?: string;
}

function CardSlider({
  data,
  isActive,
}: {
  data: propsCard;
  isActive: boolean;
}) {
  return (
    <div style={{ opacity: isActive ? 1 : 0 }} className={styled.containerCard}>
      <picture className={styled.picture}>
        <Image className={styled.img} src={data.src} alt={data.title}></Image>
      </picture>
      <div className={styled.containerText}>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>
    </div>
  );
}

export default CardSlider;
