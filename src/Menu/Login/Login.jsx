import React ,{useState} from "react";
import "../Login/Login.css"
import { Link } from "react-router-dom";
import imagen from "../Imagenes/imagen.png"
import app from "../../Credenciales";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'; 

const auth = getAuth(app);

function Login (){

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
       


    return(
        
        <>
            <div className="container">
                <div className="image-container">
                    <img src={imagen} alt="logo" className="logo" />
                </div>
                <div className="content-container">
                    <h1 className="welcome-text">Login</h1>
                    <form action="">
                    <label htmlFor="email" className="enter">E-mail</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Username or E-mail" value={email}  onChange={e => setEmail(e.target.value)} required />
                    <label htmlFor="password" className="enter">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <button type="submit" className="login">Login</button>
                    </form>
                    <p>Don't have an account? <Link className="sing" to={"/Registro"} > Sign Up </Link></p>
                </div>
            </div>
        </>
    )
}
export default Login;