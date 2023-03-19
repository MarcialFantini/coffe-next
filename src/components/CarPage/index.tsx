"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createOrder } from "@/store/slice/orders/ordersThunks";

import React from "react";
import CardsOrders from "../CardsOrders";
import styled from "./styled.module.css";

function CarPage() {
  const products = useAppSelector((state) => state.car.productsSelected);
  const token = useAppSelector((state) => state.user.token);

  const dispatch = useAppDispatch();

  const handlerSubmitOrder = () => {
    console.log(products);

    products.forEach((product) => {
      console.log({ amount: product.amount, id_product: product.id, token });
      dispatch<any>(
        createOrder({ amount: product.amount, id_product: product.id, token })
      );
    });
  };

  return (
    <div className={styled.containerPage}>
      {products.length !== 0 ? (
        products.map((item) => (
          <CardsOrders order={item} key={item.id}></CardsOrders>
        ))
      ) : (
        <div>
          <h2>You don't have nothing in the car.</h2>
          <h2>Plisse select just a product </h2>
        </div>
      )}
      {products.length !== 0 ? (
        <div>
          <button onClick={handlerSubmitOrder} className={styled.btnBuy}>
            Buy Order
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CarPage;
