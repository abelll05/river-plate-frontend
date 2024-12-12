import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const token = new URLSearchParams(window.location.search).get('token'); // Obtiene el token de la URL

  useEffect(() => {
    if (token) {
      fetch(`/api/verify/${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setMessage('Error en la verificación. El token es inválido o ha expirado.');
          } else {
            setMessage('Verificación exitosa. Ahora puedes iniciar sesión.');
            setTimeout(() => {
              navigate('/login'); // Redirige al login después de la verificación
            }, 3000); // Espera 3 segundos antes de redirigir
          }
        })
        .catch((error) => {
          setMessage('Hubo un error al procesar la verificación.');
          console.error(error);
        });
    }
  }, [token, navigate]);

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Verify;
