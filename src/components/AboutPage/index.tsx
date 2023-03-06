import React from "react";
import srcCamping from "../../images/about/srcCamping.jpg";
import srcAlce from "../../images/about/alce.jpg";

import styled from "./styled.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styled.aboutContainer}>
      <h1 className={styled.titleAbout}>ABOUT</h1>
      <picture className={styled.picture}>
        <Image src={srcCamping} alt="camping" className={styled.img}></Image>
      </picture>
      <p className={styled.text}>
        Whether you’re providing fishing charters or surf adventures, promoting
        local farmers markets or saving the whales, offering vegan cooking tips
        or selling organic lip balm — the Natural Theme is a natural choice for
        your WordPress website solution.
      </p>

      <div className={styled.containerImportant}>
        <h2 className={styled.titleAbout}>
          A natural choice for businesses that are involved with nature.
        </h2>
        <p className={styled.text}>
          The Natural Theme is an earthy design for businesses and brands that
          provide products and services involved with the natural world — such
          as handmade jewelers, outfitters, tour guides, outdoor products and
          expeditions, and much more.
        </p>
      </div>
      <picture className={styled.picture}>
        <Image src={srcAlce} alt="camping" className={styled.img}></Image>
      </picture>
      <p className={styled.text}>
        Nulla accumsan, elit quis vehicula auctor, enim ligula pharetra ligula,
        nec facilisis purus ipsum nec sem. Quisque vitae risus elit, quis
        lobortis augue. Duis dignissim example link mauris eu arcu consectetur
        in scelerisque risus iaculis. Maecenas ac sagittis libero. Maecenas
        consectetur, nunc et euismod malesuada, libero nunc vestibulum ante, sed
        tempor ligula sapien vitae enim. Nullam in elit quam. Maecenas feugiat
        euismod libero, quis feugiat enim elementum sit amet. Fusce in sem id mi
        venenatis hendrerit. Phasellus tempus enim vel nulla accumsan volutpat.
      </p>
      <div className={styled.importanTextPrincipal}>
        <h2 className={styled.titleAbout + " " + styled.lessMargin}>
          An understanding of the natural world and what’s in it is a source of
          not only a great curiosity but great fulfillment.
        </h2>
        <p className={styled.personSubTitle}>David Attenborough </p>
      </div>
      <p className={styled.text}>
        Nunc eleifend, erat eu lacinia feugiat, erat tortor convallis justo, vel
        eleifend massa dui vitae nunc. Duis volutpat orci eu orci ultrices eget
        ultrices mi mollis. Integer in enim ut velit congue varius eu eget
        purus. Nulla eget molestie ipsum. Duis mollis cursus quam, non faucibus
        risus rutrum vitae. Vestibulum commodo convallis ipsum, nec hendrerit
        elit eleifend eu. Vestibulum non nisl ligula, id aliquet leo. Fusce
        vitae ligula nec lacus tincidunt porta. Vestibulum et elementum erat.
        Pellentesque rutrum velit et justo cursus a tempor quam lacinia. Duis
        blandit pulvinar tortor id rhoncus. Quisque malesuada malesuada
        fringilla. Phasellus et lorem tortor, sed convallis libero. Cras
        consequat, ipsum quis porttitor consectetur, lacus ipsum pulvinar
        turpis, ut facilisis orci augue vitae tellus. Etiam a neque quis turpis
        scelerisque pulvinar.
      </p>
    </div>
  );
}
