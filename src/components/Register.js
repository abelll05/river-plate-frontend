import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import SuccessNotification from './SuccessNotification';  // Importar el componente de notificación

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);  // Estado para mostrar la notificación
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Estado para controlar la carga
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Activar estado de carga
    try {
      const response = await fetch(
        'https://river-plate-backend.onrender.com/api/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      setLoading(false);  // Desactivar el estado de carga
      if (response.ok) {
        setShowSuccess(true);  // Mostrar la notificación de éxito
        setTimeout(() => {
          navigate('/login');
        }, 3000);  // Redirigir después de 3 segundos
      } else {
        setError(data.error || 'Error al registrarse');
      }
    } catch (error) {
      console.error('Error al registrarse:', error);
      setLoading(false);  // Desactivar el estado de carga en caso de error
      setError('No se pudo conectar con el servidor. Intenta nuevamente.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        {showSuccess && <SuccessNotification message="¡Registro exitoso! Te hemos enviado un correo de confirmación." onClose={() => setShowSuccess(false)} />}
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Nombre de Usuario</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
              required
            />
          </div>
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </form>
        
        {loading && <div className="loading-message">Registrando...</div>}
        
        <p className="auth-footer">
          ¿Ya tienes cuenta?{' '}
          <span className="auth-link" onClick={() => navigate('/login')}>
            Inicia sesión aquí
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
