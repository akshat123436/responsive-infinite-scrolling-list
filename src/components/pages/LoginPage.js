import React, { useRef } from "react";
import styles from "./LoginPage.module.css";
import { useAlert, transitions, positions } from "react-alert";
function LoginPage({ setUserDetails }) {
  const username = useRef();
  const password = useRef();
  const showAlert = useAlert();

  const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 2000,
    offset: "30px",
    transition: transitions.SCALE,
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setUserDetails({
      username: username.current.value,
      password: password.current.value,
    });

    username.current.value = "";
    password.current.value = "";
  };
  const clickHandler = () => {
    if (!username.current.value || !password.current.value) {
      showAlert.error("Please enter both Username and Password!", {
        ...options,
      });
    } else if (
      username.current.value !== "foo" ||
      password.current.value !== "bar"
    ) {
      showAlert.error("Username or Password incorrect!", { ...options });
    }
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
      <button type="submit" onClick={clickHandler}>
        LOGIN
      </button>
    </form>
  );
}

export default LoginPage;
