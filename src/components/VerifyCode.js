import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyCode = () => {
  const { email } = useParams();
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const response = await axios.post('https://river-plate-backend.onrender.com/api/verify-code', {
        email,
        code,
      });

      setMessage(response.data.message);
      setTimeout(() => navigate('/login'), 2000); // Redirige al login después de verificar
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