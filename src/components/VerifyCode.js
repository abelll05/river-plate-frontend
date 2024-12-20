import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'; 

const VerifyCode = () => {
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
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
        localStorage.removeItem('userEmail'); 
      }, 2000); 
    } catch (error) {
      setError(error.response?.data?.error || 'Error al verificar el código');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Verificar cuenta</h2>
        <p>Se ha enviado un código a tu correo: {email}</p>
        <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }} className="auth-form">
          <div className="form-group">
            <label>Código de Verificación</label>
            <input
              type="text"
              placeholder="Ingresa el código de verificación"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Verificar
          </button>
          {message && <p className="auth-footer success">{message}</p>}
          {error && <p className="auth-footer error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
