"use client";
import styles from "@/styles/Login.module.css";
import { useState } from "react";
import AuthService from "@/lib/authService.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password);
      if (response.token) {
        // Successfully logged in
        setMessage("Logged in!");
      }
    } catch (error) {
      setMessage("Login failed :(");
    }
  };

  return (
    <div id="login-page">
      <h2>Admin Login</h2>
      <form id="login-form" className={styles["form"]} onSubmit={handleLogin}>
        <label htmlFor="username">
          Username:{" "}
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p>Message: {message}</p>
    </div>
  );
};

export default Login;
