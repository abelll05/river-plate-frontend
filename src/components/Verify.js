import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api'; // Usar api.js

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Obtener el token de la URL

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Llamada al backend para verificar el correo
        const response = await api.get(`/auth/verify/${token}`);
        if (response.status === 200) {
          // Redirigir al componente de éxito
          navigate('/verify-success');
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error.response?.data || error.message);
        navigate('/login'); // Redirigir al login en caso de error
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <h2>Verificando tu correo...</h2>
      <p>Por favor espera mientras verificamos tu cuenta.</p>
    </div>
  );
};

export default Verify;
