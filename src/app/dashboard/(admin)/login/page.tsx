"use client";

import axios from "axios";
import { FC, FormEvent, useState } from "react";

const Login: FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();

        const response = await axios.post("https://kxlsxconverterapi.onrender.com/User")
    }
    
    return (
        <div id="login-page">
            <form id="id-form" onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>
        </div>
    )
}

export default Login;
