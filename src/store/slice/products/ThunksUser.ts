import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./products";

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (page: number) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/product/page/${page}`
      );
      const data: Product[] = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
