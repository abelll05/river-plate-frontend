import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch(
        'https://river-plate-backend.onrender.com/api/forgot-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Enlace de restablecimiento enviado a tu correo.');
        setTimeout(() => navigate('/login'), 5000); // Redirigir después de 5 segundos
      } else {
        setError(data.error || 'Error al enviar el enlace');
      }
    } catch (error) {
      console.error('Error en forgot-password:', error);
      setError('No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Olvidé mi Contraseña</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Introduce tu email"
              required
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Enviando enlace...' : 'Enviar enlace'}
          </button>
          {error && <p className="auth-error">{error}</p>}
          {successMessage && <p className="auth-success">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
