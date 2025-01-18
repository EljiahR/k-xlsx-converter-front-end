"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { FC, FormEvent, useState } from "react";
import instance from "src/app/_lib/axiosBase";

const Login: FC = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        
        const credentials = {
            UserName: username,
            Password: password
        }

        try {
            const response = await instance.post("/User/SignIn", credentials, { withCredentials: true });
            console.log(response.data);
            router.push("/dashboard/employees");
        } catch (error) {
            console.error(error);
            clearForm();
        }
    }

    const clearForm = () => {
        setUsername("");
        setPassword("");
    }
    
    return (
        <div id="login-page">
            <Link href={"/"}>
                <button>Return to Homepage</button>
            </Link>
            <form id="login-form" onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
