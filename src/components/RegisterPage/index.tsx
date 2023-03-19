"use client";
import React, { useEffect, useState } from "react";

import styled from "./styled.module.css";
import Register from "./Register";
import Login from "./Login";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

function RegisterPage() {
  const router = useRouter();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const isUser = useAppSelector((state) => state.user.isUser);

  useEffect(() => {
    if (isUser) {
      router.push("/shop");
    }
  }, [isUser]);

  return (
    <>
      <h1 className={styled.titleH1}>Register or Login</h1>
      <div className={styled.containerPop}>
        <Register register={register} setRegister={setRegister}></Register>
        <Login login={login} setLogin={setLogin}></Login>
      </div>
    </>
  );
}

export default RegisterPage;
