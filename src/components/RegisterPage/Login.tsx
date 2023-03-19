"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

import { loginToken } from "../../store/slice/user/ThunksUser";

import styled from "./styled.module.css";

interface props {
  setLogin: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
    }>
  >;
  login: {
    email: string;
    password: string;
  };
}

function Login({ login, setLogin }: props) {
  const handlerLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const router = useRouter();

  const dispatch = useAppDispatch();

  const isUser = useAppSelector((state) => state.user.isUser);

  const handlerLoginDispatch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch<any>(loginToken(login));
    console.log(isUser);
  };

  useEffect(() => {
    if (isUser) {
      router.push("/shop");
    }
  }, [isUser, dispatch]);

  return (
    <form onSubmit={handlerLoginDispatch} className={styled.formLogin}>
      <h2>Login:</h2>
      <label>
        Email
        <input name="email" onChange={handlerLoginChange} type="email" />
      </label>
      <label>
        Password
        <input name="password" onChange={handlerLoginChange} type="password" />
      </label>
      <button className={styled.btnSubmit}>Login</button>
    </form>
  );
}

export default Login;
