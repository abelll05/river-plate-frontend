import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerifySuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/login'); // Redirigir al login después de 3 segundos
    }, 3000);

    return () => clearTimeout(timeout); // Limpiar el timeout si el componente se desmonta
  }, [navigate]);

  return (
    <main className="verify-success-container">
      <h2>¡Tu correo ha sido verificado exitosamente!</h2>
      <p>Ahora puedes iniciar sesión con tus credenciales.</p>
      <p>Serás redirigido al inicio de sesión en breve...</p>
    </main>
  );
};

export default VerifySuccess;
