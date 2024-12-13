import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Auth.css';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Validar el token con el backend si es necesario
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch(
        `https://river-plate-backend.onrender.com/api/reset-password/${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Contraseña restablecida con éxito');
        setTimeout(() => navigate('/login'), 5000); // Redirigir después de 5 segundos
      } else {
        setError(data.error || 'Error al restablecer la contraseña');
      }
    } catch (error) {
      console.error('Error en reset-password:', error);
      setError('No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Restablecer Contraseña</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Nueva Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu nueva contraseña"
              required
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Restableciendo...' : 'Restablecer contraseña'}
          </button>
          {error && <p className="auth-error">{error}</p>}
          {successMessage && <p className="auth-success">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
