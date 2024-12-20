import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import SuccessNotification from './SuccessNotification'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch(
        'https://river-plate-backend.onrender.com/api/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || 'Usuario registrado con éxito. Verifica tu correo.');
        setUsername('');
        setEmail('');
        setPassword('');

        localStorage.setItem('userEmail', email);
        setTimeout(() => {
          navigate('/verify-code');
        }, 2000);
      } else {
        setError(data.error || 'Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      setError('No se pudo conectar con el servidor. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Nombre de usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Introduce tu nombre de usuario"
              required
            />
          </div>
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
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
              required
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
          {error && <p className="auth-error">{error}</p>}

          <p className="auth-footer">
            ¿Ya tienes cuenta?{' '}
            <span className="auth-link" onClick={() => navigate('/login')}>
              Iniciar sesión
            </span>
          </p>
        </form>
      </div>
      {successMessage && (
        <SuccessNotification
          message={successMessage}
          onClose={() => setSuccessMessage('')} 
        />
      )}
    </div>
  );
};

export default Register;
