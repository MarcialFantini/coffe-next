import Image from "next/image";
import React from "react";
import srcImage from "../../images/header/headerImg.jpg";
import logoSrc from "../../images/navbar/logo.svg";

import styled from "./styled.module.css";

export function Header() {
  return (
    <header className={styled.containerHeader}>
      <picture className={styled.picture}>
        <Image alt="bosque" className={styled.img} src={srcImage}></Image>
      </picture>
      <div className={styled.text}>
        <Image className={styled.imgLogo} alt="imgLogo" src={logoSrc}></Image>
      </div>
    </header>
  );
}
