import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
      setIsAuthenticated(true); // Cambia el estado global
      navigate('/'); // Redirige al Home
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
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        ¿No tienes cuenta? <button onClick={() => navigate('/register')}>Regístrate aquí</button>
      </p>
    </div>
  );
};

export default Login;
