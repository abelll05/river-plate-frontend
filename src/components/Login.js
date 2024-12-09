import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import './Auth.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Error en el login:', error);

      if (error.response) {
        alert(error.response.data.error || 'Error al iniciar sesión');
      } else {
        alert('No se pudo conectar con el servidor. Intenta nuevamente.');
      }
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
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
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
