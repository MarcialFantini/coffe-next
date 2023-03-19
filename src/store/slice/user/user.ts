import { createSlice } from "@reduxjs/toolkit";
import { createUser, loginToken } from "./ThunksUser";

interface InitialState {
  isUser: boolean;
  token: string;
}

const initialState: InitialState = {
  isUser: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload?.token) {
        state.token = action.payload.token;
        state.isUser = true;
      }
    });
    build.addCase(loginToken.fulfilled, (state, action) => {
      if (action.payload?.token) {
        state.token = action.payload.token;
        state.isUser = true;
      }
    });
  },
});

export const {} = userSlice.actions;

export const userReducer = userSlice.reducer;
