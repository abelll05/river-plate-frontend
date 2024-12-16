import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'https://river-plate-backend.onrender.com/api/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        // Si el inicio de sesión es exitoso
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/'); // Redirigir al inicio
      } else {
        // Si hay un error, mostrar el mensaje de error del servidor
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error en el login:', error);
      setError('No se pudo conectar con el servidor. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
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
            {loading ? 'Iniciando sesión...' : 'Login'}
          </button>
          {error && <p className="auth-error">{error}</p>} {/* Mostrar error */}
        </form>
        <p className="auth-footer">
          ¿No tienes cuenta?{' '}
          <span className="auth-link" onClick={() => navigate('/register')}>
            Regístrate aquí
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;