import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import './HamburgerMenu.css'; 

const HamburgerMenu = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setIsAuthenticated(false); 
    navigate("/login"); 
  };

  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      {/* Icono de las tres barras*/}
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
