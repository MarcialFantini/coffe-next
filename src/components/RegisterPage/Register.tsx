import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createUser } from "@/store/slice/user/ThunksUser";
import React from "react";

import styled from "./styled.module.css";

interface props {
  setRegister: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      password: string;
    }>
  >;
  register: {
    name: string;
    email: string;
    password: string;
  };
}

function Register({ setRegister, register }: props) {
  const handlerRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  const dispatch = useAppDispatch();

  const handlerLoginDispatch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch<any>(createUser(register));
  };

  return (
    <form className={styled.formRegister}>
      <h2>Register:</h2>

      <label>
        Name:
        <input
          value={register.name}
          onChange={handlerRegister}
          name="name"
          type="text"
        />
      </label>
      <label>
        Email:
        <input
          value={register.email}
          onChange={handlerRegister}
          name="email"
          type="email"
        />
      </label>
      <label>
        Password
        <input
          value={register.password}
          onChange={handlerRegister}
          name="password"
          type="password"
        />
      </label>
      <button onClick={handlerLoginDispatch} className={styled.btnSubmit}>
        Register
      </button>
    </form>
  );
}

export default Register;
