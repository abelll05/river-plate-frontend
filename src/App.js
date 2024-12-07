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
import Footer from "./components/Footer"; // Importamos el componente Footer

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); 
    } else {
      setIsAuthenticated(false); 
    }
  }, []);

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
                    localStorage.removeItem("token"); 
                    setIsAuthenticated(false); 
                  }}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
      <Footer /> {/* Agregamos el Footer aquí */}
    </Router>
  );
};

export default App;
