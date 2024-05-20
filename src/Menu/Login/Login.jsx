import React ,{useState} from "react";
import "../Login/Login.css"
import { Link } from "react-router-dom";
import imagen from "../Imagenes/imagen.png"
import app from "../../Credenciales";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'; 

const auth = getAuth(app);

function Login (){

        const [correoElectronico, setEmail] = useState("");
        const [contraseña, setPassword] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:8080/registro/login', {
                    correoElectronico,
                    contraseña
                });
                console.log('Autenticación exitosa');
                // Lógica para redirigir a otra página o mostrar un mensaje de éxito
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
                // Lógica para manejar errores, como mostrar un mensaje de error al usuario
            }
        };
    return(
        <>
            <div className="container">
                <div className="image-container">
                    <img src={imagen} alt="logo" className="logo" />
                </div>
                <div className="content-container">
                    <h1 className="welcome-text">Acceso</h1>
                    <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="enter">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Ingrese su E-mail" value={correoElectronico}  onChange={e => setEmail(e.target.value)} required />
                    <label htmlFor="password" className="enter">Password</label>
                    <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" value={contraseña} onChange={e => setPassword(e.target.value)} required />
                    <Link to={"/carousel"}>
                    <button type="submit" className="login">Ingresar</button>
                    </Link>
                    </form>
                    <p>No tienes cuenta aun? <Link className="sing" to={"/registro"} > Registrese </Link></p>
                </div>
            </div>
        </>
    )
}
export default Login;