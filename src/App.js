import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Plantel from "./components/Plantel";
import Socios from "./components/Socios";
import AccesosEstadio from "./components/AccesosEstadio";
import Redes from "./components/Redes";
import Login from "./components/Login";
import Register from "./components/Register";
import NoticiaDetalle from "./components/NoticiaDetalle"; // Componente para detalles de noticias
import Verify from "./components/Verify"; // Importar el componente Verify
import VerifySuccess from './components/VerifySuccess';
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Verifica si existe el token
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <div className="App-main">
        <Routes>
          {/* Rutas públicas */}
          {!isAuthenticated ? (
            <>
              <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
              <Route path="/verify/:token" component={Verify} /> {/* Ruta para la verificación de correo */}
              <Route path="/verify-success" element={<VerifySuccess />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </>
          ) : (
            <>
              {/* Rutas protegidas */}
              <Route path="/" element={<Home />} />
              <Route path="/historia" element={<Historia />} />
              <Route path="/plantel" element={<Plantel />} />
              <Route path="/socios" element={<Socios />} />
              <Route path="/accesos-estadio" element={<AccesosEstadio />} />
              <Route path="/redes" element={<Redes />} />
              <Route path="/noticia/:id" element={<NoticiaDetalle />} /> {/* Ruta para detalles */}
              <Route path="/logout" element={<Navigate to="/login" replace onClick={handleLogout} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
