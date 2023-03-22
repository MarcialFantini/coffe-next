import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import products from "./slice/products/products";
import { carReducer } from "./slice/car/car";
import { userReducer } from "./slice/user/user";
import { adminReducer } from "./slice/admin/admin";

export const store = configureStore({
  reducer: {
    products,
    car: carReducer,
    user: userReducer,
    admin: adminReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
