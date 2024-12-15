import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar el email desde localStorage
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setMessage('No se encontró el correo. Por favor, regístrate nuevamente.');
    }
  }, []);

  const handleVerify = async () => {
    if (!code) {
      setMessage('Por favor ingresa el código de verificación.');
      return;
    }

    try {
      const response = await axios.post('https://river-plate-backend.onrender.com/api/verify-code', {
        email,
        code,
      });

      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/login');
        localStorage.removeItem('userEmail'); // Eliminar email de localStorage después de la verificación
      }, 2000); // Redirigir al login después de verificar
    } catch (error) {
      setError(error.response?.data?.error || 'Error al verificar el código');
    }
  };

  return (
    <div>
      <h2>Verificar cuenta</h2>
      <p>Se ha enviado un código a tu correo: {email}</p>
      <input
        type="text"
        placeholder="Ingresa el código de verificación"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerify}>Verificar</button>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default VerifyCode;
