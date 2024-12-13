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
import NoticiaDetalle from "./components/NoticiaDetalle";
import Verify from "./components/Verify";
import VerifySuccess from './components/VerifySuccess';
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword"; // Componente de Olvidé mi contraseña
import ResetPassword from "./components/ResetPassword"; // Componente de Restablecer contraseña
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
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
              <Route path="/verify/:token" element={<Verify />} />
              <Route path="/verify-success" element={<VerifySuccess />} />
              <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Ruta para Olvidé mi contraseña */}
              <Route path="/reset-password/:token" element={<ResetPassword />} /> {/* Ruta para Restablecer contraseña */}
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
              <Route path="/noticia/:id" element={<NoticiaDetalle />} />
              <Route path="/logout" element={<Navigate to="/login" replace />} />
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