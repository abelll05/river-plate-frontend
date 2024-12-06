import React from "react";
import './Estadio.css';  


const Estadio = () => {
  return (
    <div className="acceso-container">
      <h1>Accesos al Estadio Monumental</h1>

      <div className="acceso-section">
        <h2>Belgrano</h2>
        <p><strong>Alta/Media/Baja</strong></p>
        <p><strong>Ingreso:</strong> Av. Libertador y Udaondo / Puente Labruna.</p>
      </div>

      <div className="acceso-section">
        <h2>Centenario</h2>
        <p><strong>Alta/Baja</strong></p>
        <p><strong>Ingreso:</strong> Calle Quinteros.</p>
      </div>

      <div className="acceso-section">
        <h2>Centenario</h2>
        <p><strong>Media</strong></p>
        <p><strong>Ingreso:</strong> Av. Figueroa Alcorta y Monroe.</p>
      </div>

      <div className="acceso-section">
        <h2>San Martín</h2>
        <p><strong>Alta/Media/Baja</strong></p>
        <p><strong>Ingreso:</strong> Av. Figueroa Alcorta y Monroe / Puente Labruna (ingreso Playón Sívori)</p>
      </div>

      <div className="acceso-section">
        <h2>Sívori</h2>
        <p><strong>Alta/Media/Baja</strong></p>
        <p><strong>Ingreso:</strong> Puente Labruna / Para Media y Baja también se podrá ingresar por Udaondo y Libertador.</p>
      </div>
    </div>
  );
};

export default Estadio;
