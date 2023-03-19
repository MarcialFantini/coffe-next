import { getData } from "@/utils/getData";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface propsCreateOrder {
  amount: number;
  id_product: number;
  token: string;
}

interface dataCreate {
  message: string;
  status: number;
}

export const createOrder = createAsyncThunk(
  "order/create_order_thunk",
  async (order: propsCreateOrder) => {
    const res = await fetch("http://localhost:5000/api/v1/order/product/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${order.token}`,
        Role: "user",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: order.amount,
        id_product: order.id_product,
      }),
    });
    const data: dataCreate = await res.json();
    if (data.status !== 201) {
      throw new Error("no created");
    }

    return {
      amount: order.amount,
      id_product: order.id_product,
    };
  }
);
