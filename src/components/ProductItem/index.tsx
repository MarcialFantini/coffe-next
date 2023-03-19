import React from "react";
import styled from "./styled.module.css";
import Image from "next/image";

import imgDefault from "../../images/product/productDefault.jpg";
import { Product } from "@/store/slice/products/products";
import Link from "next/link";
import { addProductCar } from "@/store/slice/car/car";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

export default function ProductItem({ item }: { item: Product }) {
  const dispatch = useAppDispatch();
  const isUser = useAppSelector((state) => state.user.isUser);
  const router = useRouter();
  const handlerBuyButton = () => {
    if (isUser) {
      dispatch(
        addProductCar({
          name: item.name,
          id: item.id,
          price: item.price,
        })
      );
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={styled.cardContainer}>
      <picture className={styled.picture}>
        <Image
          width={1200}
          height={1200}
          className={styled.img}
          alt={item.name}
          src={imgDefault}
        ></Image>
      </picture>
      <h2 className={styled.titleProduct}>{item.name}</h2>
      <p className={styled.text}>$ {item.price}</p>
      <p>{item.description}</p>
      <Link href={`/shop/product/${item.id}`} className={styled.button}>
        VIEW PRODUCT
      </Link>
      <button
        onClick={handlerBuyButton}
        style={{ background: "black", color: "white" }}
        className={styled.button}
        value={item.id}
      >
        BUY
      </button>
    </div>
  );
}
