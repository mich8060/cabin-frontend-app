import React, { useEffect, useState,  } from "react";
import axios from "axios";

export default function FreeComponent(){

    const [message, setMessage] = useState("");

    useEffect(() => {
        axios({
            method: "get",
            url: "https://cabin-auth-app-016019d5daf8.herokuapp.com/free-endpoint"
        })
        .then((result) => {
            setMessage(result.data.message);
        })
        .catch((error) => {
            error = new Error();
        });
    },[])

    return(
        <div>
            <h1>Free Component</h1>
            <h3>{message}</h3>
        </div>
    )
}