import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  token: string;
  isAdmin: boolean;
}

const initialState: InitialState = {
  token: "",
  isAdmin: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const {} = adminSlice.actions;

export const adminReducer = adminSlice.reducer;
