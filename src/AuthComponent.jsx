import React, { useEffect, useState,  } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const token = cookies.get("TOKEN");

export default function AuthComponent() {

    const [message, setMessage] = useState("");

    const logout = () => {
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }

    useEffect(() => {
        axios({
            method: "get",
            url: "https://cabin-auth-app-016019d5daf8.herokuapp.com/auth-endpoint",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((result) => {
            setMessage(result.data.message);
        })
        .catch((error) => {
            error = new Error();
        });
    },[])

    return (
        <div>
            <h1>Auth Component</h1>
            <h3>{message}</h3>
            <button type="submit" onClick={() => logout()}>Logout</button>
        </div>
    );
}