import { useEffect, useState } from 'react'
import { Registro } from './Menu/Registro/Registro'
import app from './Credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import Menu from './Menu/Menu.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Menu/Login/Login.jsx'
const auth = getAuth(app)
function App() {

  const [Usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth,(usuario) => {
      if (usuario) {
        setUsuario(usuario);
      } else {
        setUsuario(null);
      }
    });

   

  return (
    <Router>
      <div>
        <Routes>
          {Usuario ? ( <Route path='/Menu' element={<Menu usuario={Usuario.email}/>}></Route>) : 
            (
              <>
                <Route path="/" element={<Login />} />
                <Route path="/Registro" element={<Registro />} />
              </>
            )}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App
