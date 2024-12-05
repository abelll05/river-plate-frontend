import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica si el token existe en localStorage al cargar la app
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token
    setIsAuthenticated(false); // Cambia el estado de autenticación
  };

  return (
    <Router>
      {isAuthenticated && <Navbar handleLogout={handleLogout} />} {/* Navbar solo si está autenticado */}
      <Routes>
        {/* Rutas públicas */}
        {!isAuthenticated && (
          <>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />
          </>
        )}

        {/* Rutas privadas */}
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<div>Historia</div>} />
            <Route path="/plantel" element={<div>Plantel</div>} />
            <Route path="/socios" element={<div>Socios</div>} />
            <Route path="/accesos" element={<div>Accesos al Estadio</div>} />
            <Route path="/redes" element={<div>Redes</div>} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
