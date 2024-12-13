import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams();  // Obtener el token de la URL

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Llamada al backend para verificar el correo
        const response = await fetch(`/api/auth/verify/${token}`, {
          method: 'GET',
        });

        if (response.ok) {
          // Si la verificación fue exitosa, redirigir al componente de éxito
          navigate('/verify-success');
        } else {
          // Si el token no es válido o hubo algún error, redirigir al login
          navigate('/login');
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error);
        navigate('/login');
      }
    };

    verifyEmail(); // Ejecutar la función de verificación
  }, [token, navigate]);

  return (
    <div>
      <h2>Verificando tu correo...</h2>
      <p>Por favor espera mientras verificamos tu cuenta.</p>
    </div>
  );
};

export default Verify;
