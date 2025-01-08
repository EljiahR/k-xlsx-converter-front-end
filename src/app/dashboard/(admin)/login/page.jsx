"use client";
import styles from "@/styles/Login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AuthService from "@/lib/authService.js";

const Login = ({ loginStatus = "" }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(loginStatus);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined && AuthService.getCurrentUser() != null) {
      setIsLoggedIn(true);
    }
    document.title = "Login";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(username, password);
      if (response.token) {
        // Successfully logged in
        router.push("/dashboard/employees");
      }
    } catch (error) {
      setMessage("Login failed :(");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
  };

  const handleTestSection = () => {
    router.push("/dashboard/test");
  }

  return (
    <div id="login-page">
      <Link href="/">
        <button>Return to home</button>
      </Link>
      <h2>Admin Login</h2>
      {!isLoggedIn && (
        <>
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
          <button type="button" onClick={handleTestSection}>Test</button>
        </>
      )}

      {message != "" && <p>Message: {message}</p>}
      {isLoggedIn && (
        <div>
          <p>Currently logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
