import React from "react";

import styled from "./styled.module.css";

export default function Contact() {
  return (
    <div className={styled.contactContainer}>
      <h1 className={styled.titleContact}>CONTACT</h1>
      <p className={styled.text}>
        This page utilizes the contact form available in the Jetpack plugin.
      </p>
      <form className={styled.form}>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Message
          <textarea />
        </label>
        <button className={styled.button} type="submit">
          CONTACT US
        </button>
      </form>
    </div>
  );
}
