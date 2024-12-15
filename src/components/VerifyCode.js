import React, { useState } from 'react';
import api from '../api/api';

const VerifyCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async () => {
    try {
      const response = await api.post('/auth/verify-code', { email, code });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error al verificar el código');
    }
  };

  return (
    <div>
      <h2>Verificar cuenta</h2>
      <input
        type="email"
        placeholder="Ingresa tu correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingresa el código de verificación"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleVerify}>Verificar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VerifyCode;
