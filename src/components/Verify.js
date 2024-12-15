import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api'; // Archivo para realizar llamadas al backend

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams(); // Obtener el token de la URL
  const [loading, setLoading] = useState(true); // Indicador de carga
  const [errorMessage, setErrorMessage] = useState(''); // Mensaje de error

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setErrorMessage('Token no válido. Por favor verifica el enlace en tu correo.');
        setLoading(false);
        return;
      }

      try {
        console.log('Token recibido desde la URL:', token); // Verificar el token recibido

        // Llamada al backend para verificar el correo
        const response = await api.get(`/auth/verify/${token}`);
        console.log('Respuesta del backend:', response.data); // Verificar la respuesta del backend

        if (response.status === 200) {
          console.log('Verificación exitosa. Redirigiendo a /verify-success');
          navigate('/verify-success'); // Redirigir al componente de éxito
        } else {
          setErrorMessage('No se pudo verificar el correo. Inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error al verificar el correo:', error.response?.data || error.message);
        setErrorMessage('Token inválido o expirado. Por favor solicita un nuevo enlace.');
      } finally {
        setLoading(false); // Detener el indicador de carga
      }
    };

    verifyEmail();
  }, [token, navigate]);

  if (loading) {
    return (
      <div>
        <h2>Verificando tu correo...</h2>
        <p>Por favor espera mientras verificamos tu cuenta.</p>
      </div>
    );
  }

  return (
    <div>
      {errorMessage ? (
        <div>
          <h2>Error en la verificación</h2>
          <p>{errorMessage}</p>
          <button onClick={() => navigate('/login')}>Volver al inicio</button>
        </div>
      ) : (
        <div>
          <h2>¡Tu correo ha sido verificado!</h2>
          <p>Redirigiéndote al inicio de sesión...</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
