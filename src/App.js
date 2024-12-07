import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Plantel from "./components/Plantel";
import Socios from "./components/Socios";
import AccesosEstadio from "./components/AccesosEstadio";
import Redes from "./components/Redes";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer"; // Importamos el componente Footer

const App = () => {
  // Recuperar el estado de autenticación desde localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? true : false;
  });

  // Recuperar la ruta actual del navegador
  const location = useLocation();

  useEffect(() => {
    // Guardamos la ruta en localStorage para que se persista
    if (isAuthenticated) {
      localStorage.setItem("currentPath", location.pathname);
    }
  }, [location, isAuthenticated]);

  useEffect(() => {
    // Verificar si el usuario ya está autenticado y redirigirlo a su última ruta
    const savedPath = localStorage.getItem("currentPath");
    if (savedPath && isAuthenticated) {
      window.location.href = savedPath; // Redirige a la última página visitada
    }
  }, [isAuthenticated]);

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/register"
              element={<Register setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/plantel" element={<Plantel />} />
            <Route path="/socios" element={<Socios />} />
            <Route path="/accesos-estadio" element={<AccesosEstadio />} />
            <Route path="/redes" element={<Redes />} />
            <Route
              path="/logout"
              element={
                <Navigate
                  to="/login"
                  replace
                  onClick={() => {
                    setIsAuthenticated(false); // Cambia el estado a false cuando se desloguea
                  }}
                />
              }
            />
            <Route path="*" element={<Navigate to={location.pathname} replace />} />
          </>
        )}
      </Routes>
      <Footer /> {/* Agregamos el Footer aquí */}
    </Router>
  );
};

export default App;
