import React, { useState } from 'react';

import axios from "axios";

export default function Register(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: "post",
            url: "https://cabin-auth-app-016019d5daf8.herokuapp.com/register",
            data: {
                firstName,
                lastName,
                email,
                password,
            },
        })
        .then((result) => {
            setRegister(true)
        })
        .catch((error) => { new Error(); })
    }

    return(
        <>
            <h2>Register</h2>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form--row">
                    <label>First Name</label>
                    <input 
                        defaultValue={firstName}
                        name="first_name"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name" 
                        type="text" 
                    />
                </div>
                <div className="form--row">
                    <label>Last Name</label>
                    <input
                        defaultValue={lastName}
                        name="last_name"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        type="text"
                    />
                </div>
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
                <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            {/* display success message */}
        {register ? (
          <p>You Are Registered Successfully</p>
        ) : (
          <p>You Are Not Registered</p>
        )}
        </>
    )
}