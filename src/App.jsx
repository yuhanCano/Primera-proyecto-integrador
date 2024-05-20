import { useEffect, useState } from 'react'
import { Registro } from './Menu/Registro/Registro'
import app from './Credenciales'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import Menu from './Menu/Inicio.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carousel from './Menu/Carousel.jsx'
import Login from './Menu/Login/Login.jsx'
const auth = getAuth(app)
function App() {
  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro />} />
          <Route path='/carousel' element={<Carousel/>}/>
        </Routes>
      </div>
    </Router>
    </>
 
  );
}

export default App
