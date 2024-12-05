import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api'; // Importa tu configuración de Axios centralizada

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamada al endpoint completo del backend
      const response = await api.post('/login', { email, password });

      // Guarda el token en localStorage
      localStorage.setItem('token', response.data.token);

      // Cambia el estado global para indicar que el usuario está autenticado
      setIsAuthenticated(true);

      // Redirige al Home
      navigate('/');
    } catch (error) {
      console.error('Error en el login:', error);

      // Muestra el mensaje de error devuelto por el backend o uno genérico
      if (error.response) {
        alert(error.response.data.message || 'Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      } else {
        alert('No se pudo conectar con el servidor. Intenta nuevamente.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
      <p>
        ¿No tienes cuenta?{' '}
        <button
          type="button"
          className="register-link"
          onClick={() => navigate('/register')}
        >
          Regístrate aquí
        </button>
      </p>
    </div>
  );
};

export default Login;
