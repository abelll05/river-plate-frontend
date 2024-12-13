import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api'; // Usar api.js

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Obtener el token de la URL

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        console.log('Token recibido desde la URL:', token); // Verificar el token recibido
        // Llamada al backend para verificar el correo
        const response = await api.get(`/auth/verify/${token}`);
        console.log('Respuesta del backend:', response.data); // Verificar la respuesta del backend

        if (response.status === 200) {
          console.log('Verificación exitosa. Redirigiendo a /verify-success');
          navigate('/verify-success'); // Redirigir al componente de éxito
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error.response?.data || error.message);
        console.log('Redirigiendo a /login debido a un error');
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
