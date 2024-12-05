import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const response = await fetch(
        'https://river-plate-backend.onrender.com/api/register', // Cambié la URL al backend
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      // Verifica si la respuesta no es JSON (para evitar errores de parseo)
      if (response.headers.get('Content-Type')?.includes('application/json')) {
        const data = await response.json();

        if (!response.ok) {
          setError(data.error || 'Error al registrarse');
          return;
        }

        // Almacenar el token y redirigir al Home
        localStorage.setItem('token', data.token);
        alert('Registro exitoso');
        navigate('/'); // Redirige al Home
      } else {
        setError('Error inesperado: la respuesta no es válida.');
      }
    } catch (err) {
      console.error('Error en el registro:', err);
      setError('Ocurrió un error inesperado. Por favor, intenta de nuevo.');
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
