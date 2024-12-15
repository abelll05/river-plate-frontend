import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>
        <Link to="/" className="logo">RIVER PLATE</Link>
      </div>

      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={closeMenu}>X</div>
        <ul>
          {!isAuthenticated ? (
            <>
              <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
              <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/historia" onClick={closeMenu}>Historia</Link></li>
              <li><Link to="/plantel" onClick={closeMenu}>Plantel</Link></li>
              <li><Link to="/socios" onClick={closeMenu}>Socios</Link></li>
              <li><Link to="/accesos-estadio" onClick={closeMenu}>Accesos Estadio</Link></li>
              <li><Link to="/redes" onClick={closeMenu}>Redes</Link></li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
