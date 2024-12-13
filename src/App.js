import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom"; // Quitamos BrowserRouter aquí
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
import VerifySuccess from "./components/VerifySuccess";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="App">
      {isAuthenticated && (
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      <div className={`App-main ${isAuthenticated ? "authenticated" : ""}`}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Rutas públicas */}
            {!isAuthenticated ? (
              <>
                <Route
                  path="/login"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Login setIsAuthenticated={setIsAuthenticated} />
                    </motion.div>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Register setIsAuthenticated={setIsAuthenticated} />
                    </motion.div>
                  }
                />
                <Route
                  path="/verify/:token"
                  element={
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Verify />
                    </motion.div>
                  }
                />
                <Route
                  path="/verify-success"
                  element={
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.6 }}
                    >
                      <VerifySuccess />
                    </motion.div>
                  }
                />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </>
            ) : (
              <>
                {/* Rutas protegidas */}
                <Route
                  path="/"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/historia"
                  element={
                    <motion.div
                      initial={{ opacity: 0, y: -100 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 100 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Historia />
                    </motion.div>
                  }
                />
                <Route
                  path="/plantel"
                  element={
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Plantel />
                    </motion.div>
                  }
                />
                <Route
                  path="/socios"
                  element={
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Socios />
                    </motion.div>
                  }
                />
                <Route
                  path="/accesos-estadio"
                  element={
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.7 }}
                    >
                      <AccesosEstadio />
                    </motion.div>
                  }
                />
                <Route
                  path="/redes"
                  element={
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Redes />
                    </motion.div>
                  }
                />
                <Route
                  path="/noticia/:id"
                  element={
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6 }}
                    >
                      <NoticiaDetalle />
                    </motion.div>
                  }
                />
                <Route path="/logout" element={<Navigate to="/login" replace />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default App;
