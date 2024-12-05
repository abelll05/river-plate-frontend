import axios from 'axios';

// Configuración base para llamadas al backend
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://river-plate-backend.onrender.com', // Cambiar en producción
});

// Interceptor para incluir el token en las solicitudes protegidas
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Agrega el token al header
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
