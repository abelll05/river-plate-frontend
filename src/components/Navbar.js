import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          RIVER PLATE
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/historia" className="navbar-link">Historia</Link>
          </li>
          <li className="navbar-item">
            <Link to="/plantel" className="navbar-link">Plantel</Link>
          </li>
          <li className="navbar-item">
            <Link to="/socios" className="navbar-link">Socios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/accesos-estadio" className="navbar-link">Accesos al Estadio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/redes" className="navbar-link">Redes</Link>
          </li>
          <li className="navbar-item">
            <Link
              to="/login"
              className="navbar-link navbar-logout"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
