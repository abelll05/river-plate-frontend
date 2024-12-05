import axios from 'axios';

const api = axios.create({
  baseURL: 'https://river-plate-backend.onrender.com/api', // Cambia según tu entorno
});

// Interceptor para incluir el token en las solicitudes protegidas
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
