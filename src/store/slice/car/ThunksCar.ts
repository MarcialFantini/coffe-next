import { getData } from "@/utils/getData";
import { createAsyncThunk } from "@reduxjs/toolkit";

const sendNewOrder = createAsyncThunk("car/order", async () => {
  const data = await getData("");
});
