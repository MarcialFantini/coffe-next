"use client";
import React from "react";

import styled from "./styled.module.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface props {
  children: React.ReactNode;
}

export default function WrapperApp({ children }: props) {
  return (
    <Provider store={store}>
      <div className={styled.wrapper}>{children}</div>
    </Provider>
  );
}
