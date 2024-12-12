import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Auth.css';

const EmailVerification = () => {
  const [verificationStatus, setVerificationStatus] = useState('Verificando...');
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`https://river-plate-backend.onrender.com/api/verify-email/${token}`);
        if (response.ok) {
          setVerificationStatus('¡Correo electrónico verificado con éxito!');
          setTimeout(() => navigate('/login?verified=true'), 3000);
        } else {
          const data = await response.json();
          setVerificationStatus(data.error || 'Error en la verificación');
        }
      } catch (error) {
        console.error('Error durante la verificación:', error);
        setVerificationStatus('Error en la conexión. Intente nuevamente más tarde.');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Verificación de Correo Electrónico</h2>
        <p>{verificationStatus}</p>
      </div>
    </div>
  );
};

export default EmailVerification;