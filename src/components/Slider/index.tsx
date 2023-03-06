"use client";
import React, { useEffect, useState } from "react";

import sliderImg1 from "../../images/slider1/slider1.jpg";
import sliderImg2 from "../../images/slider1/slider2.jpg";
import sliderImg3 from "../../images/slider1/slider3.jpg";
import sliderImg4 from "../../images/slider1/slider4.jpg";

import styled from "./styled.module.css";
import CardSlider, { propsCard } from "../CardSlider";

const data: propsCard[] = [
  {
    title: "Unique Artisanal Coffee",
    subtitle: "Discover the Richness of Our Blends",
    src: sliderImg1,
  },
  {
    title: "Selected Premium Beans",
    subtitle: "Experience Coffee Like Never Before",
    src: sliderImg2,
  },
  {
    title: "Irresistible Daily Aroma",
    subtitle: "From Farm to Cup, Quality Matters",
    src: sliderImg3,
  },
  {
    title: "Exceptional Authentic Flavor",
    subtitle: "Freshly Roasted for Your Enjoyment",
    src: sliderImg4,
  },
];

export default function Slider() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 3) {
        setCount(0);
      } else {
        setCount((value) => value + 1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={styled.slider}>
      <div className={styled.filter}></div>

      <div className={styled.containerCards}>
        {data.map((item, x) => {
          return (
            <CardSlider
              isActive={x === count}
              key={item.title}
              data={item}
            ></CardSlider>
          );
        })}
      </div>
    </div>
  );
}
