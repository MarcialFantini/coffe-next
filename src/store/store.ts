import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import products from "./slice/products/products";
import { carReducer } from "./slice/car/car";
import { userReducer } from "./slice/user/user";

export const store = configureStore({
  reducer: { products, car: carReducer, user: userReducer },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
