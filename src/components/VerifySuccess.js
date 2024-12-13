import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerifySuccess = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirige al login
  };

  return (
    <div>
      <h2>¡Tu correo ha sido verificado exitosamente!</h2>
      <p>Ahora puedes iniciar sesión con tus credenciales.</p>
      <button onClick={handleLoginRedirect}>Ir al Login</button>
    </div>
  );
};

export default VerifySuccess;
