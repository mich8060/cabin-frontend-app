import React, { useState } from 'react';
import Cookies from "universal-cookie";
import axios from "axios";

export default function Login(){

    const cookies = new Cookies();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "https://cabin-auth-app-016019d5daf8.herokuapp.com/login",
            data: {
                email,
                password,
            },
        })
        .then((result) => {
            setLogin(true);
            cookies.set("TOKEN", result.data.token, {
                path: "/",
            });
            window.location.href = "/auth";
        })
        .catch((error) => {
            error = new Error();
        });
    }

    return(
        <>
            <form>
                <div className="form--row">
                    <label>Email Address</label>
                    <input
                        defaultValue={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        type="email"
                    />
                </div>
                <div className="form--row">
                    <label>Password</label>
                    <input 
                        defaultValue={password}
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        type="password"
                    />
                </div>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
            </form>
            {/* display success message */}
            {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Logged in</p>
            )}
        </>
    )
}