import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Verify = () => {
  const navigate = useNavigate(); // Usamos useNavigate
  const { token } = useParams();  // Obtenemos el token de la URL

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Hacer la solicitud de verificación al backend
        const response = await fetch(`/api/auth/verify/${token}`, {
          method: 'GET',
        });

        if (response.ok) {
          // Si la verificación fue exitosa, redirigir al login
          navigate('/verify-success'); // Redirigir al componente de éxito
        } else {
          // Si hubo un error (token inválido o expirado)
          navigate('/login'); // Redirigir al login en caso de error
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error);
        navigate('/login'); // Redirigir al login si hay un error en la conexión
      }
    };

    verifyEmail();
  }, [token, navigate]); // Dependencia de token para ejecutar el efecto

  return (
    <div>
      <h2>Verificando tu correo...</h2>
      <p>Por favor, espera mientras verificamos tu cuenta.</p>
    </div>
  );
};

export default Verify;
