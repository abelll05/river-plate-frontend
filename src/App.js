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
          {/* Rutas públicas que no requieren autenticación */}
          <Route path="/login" element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuthenticated ? <Register setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/verify-success" element={<VerifySuccess />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Rutas protegidas que requieren autenticación */}
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/historia" element={isAuthenticated ? <Historia /> : <Navigate to="/login" />} />
          <Route path="/plantel" element={isAuthenticated ? <Plantel /> : <Navigate to="/login" />} />
          <Route path="/socios" element={isAuthenticated ? <Socios /> : <Navigate to="/login" />} />
          <Route path="/accesos-estadio" element={isAuthenticated ? <AccesosEstadio /> : <Navigate to="/login" />} />
          <Route path="/redes" element={isAuthenticated ? <Redes /> : <Navigate to="/login" />} />
          <Route path="/noticia/:id" element={isAuthenticated ? <NoticiaDetalle /> : <Navigate to="/login" />} />

          {/* Ruta para logout */}
          <Route path="/logout" element={<Navigate to="/login" replace />} />

          {/* Ruta por defecto */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
        </Routes>
      </div>
      
      {/* Footer que se muestra en todas las páginas */}
      <Footer />
    </Router>
  );
};

export default App;
