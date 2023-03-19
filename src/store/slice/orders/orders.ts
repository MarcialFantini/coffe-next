import { createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./ordersThunks";

interface newOrder {
  id_product: number;
  amount: number;
}

interface InitialState {
  orders: newOrder[];
}

const initialState: InitialState = {
  orders: [],
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createOrder.fulfilled, (state, action) => {
      if (action.payload) {
        state.orders.push(action.payload);
      }
    });
  },
});
