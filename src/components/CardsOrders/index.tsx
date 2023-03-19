"use client";
import {
  ProductOrder,
  addProductCar,
  delProductCar,
  lessProductCar,
} from "@/store/slice/car/car";
import React from "react";

import styled from "./styled.module.css";
import { useAppDispatch } from "@/store/hooks";

function CardsOrders({ order }: { order: ProductOrder }) {
  const dispatch = useAppDispatch();

  const handlerAdd = () => {
    dispatch(
      addProductCar({ name: order.name, id: order.id, price: order.price })
    );
  };
  const handlerDel = () => {
    dispatch(delProductCar(order.id));
  };

  const handlerLess = () => {
    dispatch(lessProductCar(order.id));
  };

  return (
    <div className={styled.containerCard}>
      <h2>Name: {order.name}</h2>
      <p className={styled.text}>Amount: {order.amount}</p>
      <p className={styled.text}>Price: {order.price} </p>
      <p className={styled.text}>Total Price: ${order.price * order.amount}</p>
      <div className={styled.containerActions}>
        <button
          onClick={handlerLess}
          className={styled.btn + " " + styled.btnLess}
        >
          <p>Less</p>
        </button>
        <button
          onClick={handlerAdd}
          className={styled.btn + " " + styled.btnAdd}
        >
          <p>Add</p>{" "}
        </button>
        <button
          onClick={handlerDel}
          className={styled.btn + " " + styled.btnDel}
        >
          <p>Del</p>
        </button>
      </div>
    </div>
  );
}

export default CardsOrders;
