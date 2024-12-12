import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Verify = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // URL de la API de verificación en producción
        const response = await fetch(`https://river-plate-backend.onrender.com/api/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setStatus('Correo verificado exitosamente. Redirigiendo al login...');
          setTimeout(() => navigate('/login'), 3000); // Redirige después de 3 segundos
        } else {
          setStatus(data.error || 'Error al verificar el correo.');
        }
      } catch (error) {
        console.error('Error en la verificación:', error);
        setStatus('Error al verificar el correo.');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <h1>Verificación de Correo</h1>
      <p>{status}</p>
    </div>
  );
};

export default Verify;
