import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const VerifySuccess = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>¡Correo verificado exitosamente!</h2>
        <p>Ahora puedes iniciar sesión con tus credenciales.</p>
        <button className="auth-button" onClick={handleLoginRedirect}>
          Ir al Login
        </button>
      </div>
    </div>
  );
};

export default VerifySuccess;
