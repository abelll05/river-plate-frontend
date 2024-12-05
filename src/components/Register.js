import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // Asegúrate de tener configurado api.js correctamente

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Usar el cliente Axios configurado en api.js
      const response = await api.post('/register', formData);

      // Manejo exitoso del registro
      localStorage.setItem('token', response.data.token); // Guarda el token en el localStorage
      alert('Registro exitoso');
      navigate('/'); // Redirige al Home
    } catch (err) {
      // Manejo de errores
      console.error('Error en el registro:', err);
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'Error al registrarse.');
      } else {
        setError('Ocurrió un error inesperado. Por favor, intenta de nuevo.');
      }
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
