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

const App = () => {
  // Obtener el token del localStorage y verificar si está presente
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token") ? true : false);

  // Verificar si hay un token válido en localStorage al cargar la app
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Si hay un token, el usuario se considera logeado
    } else {
      setIsAuthenticated(false); // Si no hay token, se forza el logout
    }
  }, []); // Solo se ejecuta una vez, cuando la app se monta

  return (
    <Router>
      {isAuthenticated && <Navbar setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />

        {/* Rutas protegidas */}
        {isAuthenticated ? (
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
                    localStorage.removeItem("token"); // Elimina el token
                    setIsAuthenticated(false); // Cambia el estado a deslogueado
                  }}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
