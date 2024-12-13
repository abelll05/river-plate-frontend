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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>¡Tu correo ha sido verificado exitosamente!</h2>
      <p>Ahora puedes iniciar sesión con tus credenciales.</p>
    </div>
  );
};

export default VerifySuccess;
