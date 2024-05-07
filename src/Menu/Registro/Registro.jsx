import React, { useState } from "react";
import "../Registro/Registro.css"
import logo from "../Imagenes/imagen.png"
import { Link } from "react-router-dom";
import axios from "axios";
export function Registro(){
    
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [comfirmPasword, setConfirm] = useState("") 

    
    return(
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="content-container">
                <h1 className="welcome-text">Registro</h1>
                <form action="" id="datos">
                    <label htmlFor="nombre" className="enter">Name</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Enter your name" value={nombre} onChange={e => setNombre (e.target.value)} required />
                    <label htmlFor="email" className="enter">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
                    <label htmlFor="password" className="enter">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" required value={password} onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="confirm-password" className="enter">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your Password" value={comfirmPasword} onChange={e => setConfirm(e.target.value)} required/>
                    <button className="login">Sign Up</button>
                </form>
                <p>You already have an account? <Link className="sing" to={"/"}>Login</Link></p>
            </div>
        </div>     
    );
}