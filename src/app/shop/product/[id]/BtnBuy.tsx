"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addProductCar } from "@/store/slice/car/car";
import { useRouter } from "next/navigation";
import React from "react";
import { ProductInterface } from "./page";

import styled from "./styled.module.css";

function BtnBuy({
  product,
  children,
}: {
  product: ProductInterface;
  children: string;
}) {
  const dispatch = useAppDispatch();
  const isUser = useAppSelector((state) => state.user.isUser);
  const router = useRouter();

  const handlerDispatch = () => {
    if (isUser) {
      dispatch(
        addProductCar({
          name: product.name,
          id: product.id,
          price: product.price,
        })
      );
      router.push("/shop");
    } else {
      router.push("/login");
    }
  };

  return (
    <button onClick={handlerDispatch} className={styled.btn}>
      {children}!
    </button>
  );
}

export default BtnBuy;
