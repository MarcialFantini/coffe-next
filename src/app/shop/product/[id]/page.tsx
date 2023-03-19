import { getData } from "@/utils/getData";
import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";

import srcImg from "../../../../images/product/productDefault.jpg";
import BtnBuy from "./BtnBuy";

interface Params {
  id: number;
}

interface props {
  params: Params;
}

export interface ProductInterface {
  id: number;
  price: number;
  name: string;
  stock: number;
  description: string;
  url_img: string;
}

async function ProductPage({ params }: props) {
  const product = await getData<ProductInterface>(
    `http://localhost:5000/api/v1/product/one/${params.id}`
  );

  const buyBtn = `Buy ${product.name} `;

  return (
    <div className={styled.containerPage}>
      <picture>
        <Image className={styled.img} width={2000} alt="" src={srcImg}></Image>
      </picture>
      <div className={styled.text}>
        <h1>Name: {product.name}</h1>
        <p>Description: {product.description}</p>
        <p> Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <BtnBuy product={product}>{buyBtn}</BtnBuy>
      </div>
    </div>
  );
}

export default ProductPage;
