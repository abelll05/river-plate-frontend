import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api'; // Usar api.js

const Verify = () => {
  const [message, setMessage] = useState('Verificando tu cuenta, por favor espera...');
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log('Token recibido desde la URL:', token);
        const response = await api.get(`/auth/verify/${token}`);

        if (response.status === 200) {
          setMessage('¡Tu cuenta ha sido verificada exitosamente! Ahora puedes iniciar sesión.');
          setTimeout(() => navigate('/login'), 3000); // Redirigir al login después de 3 segundos
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error.response?.data || error.message);
        setMessage('Hubo un problema al verificar tu cuenta. Por favor, intenta nuevamente.');
        setTimeout(() => navigate('/login'), 3000); // Redirigir al login después de 3 segundos
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Verify;
