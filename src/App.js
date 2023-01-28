import React, { useState } from "react";
import "./App.css";
import UserList from "./components/user/UserList.js";
import LoginPage from "./components/pages/LoginPage.js";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const [userdetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const isLoggendIn = () => {
    return userdetails.username === "foo" && userdetails.password === "bar";
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            !isLoggendIn() ? (
              <LoginPage setUserDetails={setUserDetails}></LoginPage>
            ) : (
              <Navigate to="/home" replace />
            )
          }
        ></Route>
        <Route
          path="/home"
          element={
            isLoggendIn() ? <UserList></UserList> : <Navigate to="/" replace />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
