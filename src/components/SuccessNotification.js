import React, { useEffect } from 'react';
import './SuccessNotification.css';

const SuccessNotification = ({ message, onClose }) => {
  useEffect(() => {
    // Cerrar el mensaje automáticamente después de 5 segundos
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="success-notification">
      <p>{message}</p>
      <button className="close-btn" onClick={onClose}>X</button>
    </div>
  );
};

export default SuccessNotification;
