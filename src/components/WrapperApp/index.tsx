import React from "react";

import styled from "./styled.module.css";

interface props {
  children: React.ReactNode;
}

export default function WrapperApp({ children }: props) {
  return <div className={styled.wrapper}>{children}</div>;
}
