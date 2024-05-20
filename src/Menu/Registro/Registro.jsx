import React, { useState } from "react";
import "../Registro/Registro.css"
import logo from "../Imagenes/imagen.png"
import { Link } from "react-router-dom";
import axios from "axios";
export function Registro(){
    
    const [name, setNombre] = useState("")
    const [correoElectronico, setEmail] = useState("")
    const [contraseña, setPassword] = useState("")
    const [confirmarContraseña, setConfirm] = useState("") 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8080/registro/guardar", {
            name,
            correoElectronico,
            contraseña,
            confirmarContraseña,
          });
          console.log(response.data); 
            setNombre("");
            setEmail("");
            setPassword("");
            setConfirm("");
    
            window.location.reload();
        } catch (error) {
          console.error("Error al enviar datos:", error);
        }
      };
    
    return(
        <div className="container">
            <div className="logo-container">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="content-container">
                <h1 className="welcome-text">Registro</h1>
                <form action="" onSubmit={handleSubmit} id="datos">
                    <label htmlFor="nombre" className="enter">Nombres</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre completo" value={name} onChange={e => setNombre (e.target.value)} required />
                    <label htmlFor="email" className="enter">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Ingrese el email" value={correoElectronico} onChange={e => setEmail(e.target.value)} required />
                    <label htmlFor="password" className="enter">Contraseña</label>
                    <input type="password" name="password" id="password" placeholder="Ingrese una contraseña" required value={contraseña} onChange={e => setPassword(e.target.value)}/>
                    <label htmlFor="confirm-password" className="enter">Confrimar contraseña</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme la contraseña" value={confirmarContraseña} onChange={e => setConfirm(e.target.value)} required/>
                    
                    <button type="submit" className="login">Registrese</button>
                    
                </form>
                <p>Ya tienes cuenta? <Link className="sing" to={"/login"}>Iniciar sesion</Link></p>
            </div>
        </div>     
    );
}