import { getTokenUser } from "@/utils/getTokenUser";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface propsCreateNewUser {
  name: string;
  password: string;
  email: string;
}

interface responseCreatedUser {
  message: string;
}

export const createUser = createAsyncThunk(
  "user/create-user",
  async (user: propsCreateNewUser) => {
    const res = await fetch("http://localhost:5000/api/v1/user/new", {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data: responseCreatedUser = await res.json();

    console.log(data);

    try {
      const token = await getTokenUser(user.email, user.password, "user");

      console.log(token);

      return token;
    } catch (error) {
      console.log(error);
    }
  }
);

interface LoginPropsInterface {
  email: string;
  password: string;
}

export const loginToken = createAsyncThunk(
  "user/log-token",
  async (body: LoginPropsInterface) => {
    try {
      const token = await getTokenUser(body.email, body.password, "user");

      return token;
    } catch (error) {
      console.log("autoRization", error);
    }
  }
);
