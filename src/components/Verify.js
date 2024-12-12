import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import axios from 'axios';

const Verify = () => {
  const { token } = useParams(); // Obtenemos el token de la URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Usamos useNavigate para redirigir

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Hacemos la solicitud para verificar el correo
        const response = await axios.get(`/auth/verify/${token}`);

        if (response.status === 200) {
          // Si la verificación fue exitosa, redirigimos a la página de éxito
          navigate('/verify-success'); // Redirigimos usando navigate
        }
      } catch (error) {
        // Si hay un error, mostramos un mensaje
        setError('Hubo un error al verificar tu correo. Intenta de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    // Ejecutamos la verificación
    verifyEmail();
  }, [token, navigate]);

  if (loading) {
    return <p>Verificando tu correo...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return null;
};

export default Verify;
