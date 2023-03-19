import React from "react";

import styled from "./styled.module.css";
import Link from "next/link";

export function Navbar() {
  return (
    <div className={styled.container}>
      <button className={styled.buttonList}>X</button>
      <nav className={styled.navContainer}>
        <ul className={styled.ulContainer}>
          <li>
            <Link className={styled.link} href="/">
              Home
            </Link>
          </li>

          <li>
            <Link className={styled.link} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={styled.link} href="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className={styled.link} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={styled.link} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
