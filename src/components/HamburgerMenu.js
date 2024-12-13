import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate
import './HamburgerMenu.css'; // Archivo de estilos CSS

const HamburgerMenu = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook para la redirección

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el menú al hacer clic en una opción
  const handleMenuClick = () => {
    setIsOpen(false); // Cierra el menú
  };

  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token
    setIsAuthenticated(false); // Actualizar el estado de autenticación
    navigate("/login"); // Redirigir a login
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      {/* Icono de las tres barras o X (dependiendo del estado del menú) */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Cruz para cerrar la barra */}
      {isOpen && (
        <div className="close-menu" onClick={toggleMenu}>
          &times;
        </div>
      )}

      {/* Menú desplegable */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          {/* Rutas públicas */}
          {!isAuthenticated ? (
            <>
              <li><Link to="/login" onClick={handleMenuClick}>Login</Link></li>
              <li><Link to="/register" onClick={handleMenuClick}>Register</Link></li>
            </>
          ) : (
            <>
              {/* Rutas protegidas */}
              <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
              <li><Link to="/historia" onClick={handleMenuClick}>Historia</Link></li>
              <li><Link to="/plantel" onClick={handleMenuClick}>Plantel</Link></li>
              <li><Link to="/socios" onClick={handleMenuClick}>Socios</Link></li>
              <li><Link to="/accesos-estadio" onClick={handleMenuClick}>Accesos Estadio</Link></li>
              <li><Link to="/redes" onClick={handleMenuClick}>Redes</Link></li>
            </>
          )}
        </ul>

        {/* Botón de Logout */}
        {isAuthenticated && (
          <div className="logout-container">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HamburgerMenu;
