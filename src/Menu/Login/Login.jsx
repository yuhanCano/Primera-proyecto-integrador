import React, { useState } from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imagen from "../Imagenes/imagen.png";
import axios from "axios";

function Login() {
    const [correoElectronico, setEmail] = useState("");
    const [contraseña, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                correoElectronico,
                contraseña,
            });
            console.log(response.data);
            if (response.data.status === 200) {
                navigate("/carousel"); // Redirigir a la página principal después del inicio de sesión exitoso
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <div className="container">
            <div className="image-container">
                <img src={imagen} alt="logo" className="logo" />
            </div>
            <div className="content-container">
                <h1 className="welcome-text">Acceso</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className="enter">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Ingrese su E-mail" value={correoElectronico} onChange={e => setEmail(e.target.value)} required />
                    <label htmlFor="password" className="enter">Password</label>
                    <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" value={contraseña} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="login">Ingresar</button>
                </form>
                <p>No tienes cuenta aun? <Link className="sing" to={"/registro"}> Registrese </Link></p>
            </div>
        </div>
    );
}

export default Login;
