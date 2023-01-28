import React, { useRef } from "react";
import styles from "./LoginPage.module.css";
function LoginPage({ setUserDetails }) {
  const username = useRef();
  const password = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    setUserDetails({
      username: username.current.value,
      password: password.current.value,
    });
    username.current.value = "";
    password.current.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h1>LOGIN</h1>
      <label className={styles.form_label}>
        <h3>Username : </h3>
      </label>
      <input ref={username} className={styles.form_input} type="text"></input>
      <label className={styles.form_label}>
        <h3>Password : </h3>
      </label>
      <input ref={password} className={styles.form_input} type="text"></input>
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default LoginPage;
