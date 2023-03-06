"use client";

import React, { useState } from "react";
import CardNew from "../CardNew";
import styled from "./styled.module.css";

import srcImg1 from "../../images/newsBlog/1.jpg";
import srcImg2 from "../../images/newsBlog/2.jpg";
import srcImg3 from "../../images/newsBlog/3.jpg";
import srcImg4 from "../../images/newsBlog/4.jpg";

export default function NewsBlog() {
  const [state, setState] = useState(false);

  const handlerAlterLess = () => setState(!state);

  return (
    <div className={styled.containerAll}>
      <div style={{ left: state ? "-100%" : "0%" }} className={styled.carrusel}>
        <div className={styled.page}>
          <CardNew
            srcImg={srcImg1}
            title="The Best Coffee Shops To Work From In Lahaina"
            subtitle="This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor pellentesque neque tempor feugiat. Vivamus odio tortor, pulvinar vitae placerat sed, […]"
          ></CardNew>
          <CardNew
            title="How We Manage Our Remote Team From Hawaii"
            subtitle="This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor pellentesque neque tempor feugiat. Vivamus odio tortor, pulvinar vitae placerat sed, […]"
            srcImg={srcImg2}
          ></CardNew>
        </div>
        <div className={styled.page}>
          <CardNew
            title="The Best Coffee Shops To Work From In Lahaina"
            subtitle="This is some example content. WordPress is an extremely user friendly content management system for websites and blogs. Users can easily add and update text, images, video, audio and more using the WordPress platform. Curabitur lacinia porta purus. Mauris laoreet dignissim imperdiet. Proin tempor pellentesque neque tempor feugiat. Vivamus odio tortor, pulvinar vitae placerat sed, […]"
            srcImg={srcImg3}
          ></CardNew>
          <CardNew
            title="Creating An Organic Workspace For Our Employees"
            subtitle="This is an example post excerpt. Excerpts can be used as summaries for the full post content. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod."
            srcImg={srcImg4}
          ></CardNew>
        </div>
      </div>
      <div className={styled.buttons}>
        <button disabled={state} onClick={handlerAlterLess}>
          1
        </button>
        <button disabled={!state} onClick={handlerAlterLess}>
          2
        </button>
      </div>
    </div>
  );
}
