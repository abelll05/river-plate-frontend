import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const VerifySuccess = () => {
  const history = useHistory();

  useEffect(() => {
    // Después de unos segundos redirige al usuario al login automáticamente
    const timer = setTimeout(() => {
      history.push('/login');
    }, 3000); // Redirige después de 3 segundos

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>¡Tu correo ha sido verificado exitosamente!</h2>
      <p>Ahora puedes iniciar sesión con tus credenciales.</p>
      <p>Serás redirigido al login en breve...</p>
    </div>
  );
};

export default VerifySuccess;
