import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Asegúrate de tener el archivo CSS correspondiente para los estilos

// Importa las imágenes desde la carpeta src/assets
import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';

const Home = () => {
  return (
    <div className="home-container">

      <div className="news-grid">
        {/* Cuadro de Noticias 1 */}
        <div className="news-item">
          <img
            src={imagen1}  // Usamos la imagen importada
            alt="Noticia 1"
            className="news-image"
          />
          <div className="news-content">
            <h3>Mala noticia para Marcelo Gallardo</h3>
            <p>se confirmó la lesión del Diablito Echeverri en River</p>
            <Link to="/history" className="news-link">Leer más</Link>
          </div>
        </div>

        {/* Cuadro de Noticias 2 */}
        <div className="news-item">
          <img
            src={imagen2}  // Usamos la imagen importada
            alt="Noticia 2"
            className="news-image"
          />
          <div className="news-content">
            <h3>Ganó Talleres y bajó a River en la tabla anual</h3>
            <p>¿Cómo está la clasificación a la Copa Libertadores 2025?</p>
            <Link to="/team" className="news-link">Leer más</Link>
          </div>
        </div>

        {/* Cuadro de Noticias 3 */}
        <div className="news-item">
          <img
            src={imagen3}  // Usamos la imagen importada
            alt="Noticia 3"
            className="news-image"
          />
          <div className="news-content">
            <h3>River presentó la nueva pantalla LED del estadio Monumental</h3>
            <p>Con un video que recopila momentos históricos enmarcados en la vieja pantalla, el club oficializó la nueva estructura. ¿Cuándo se estrena?</p>
            <Link to="/socios" className="news-link">Leer más</Link>
          </div>
        </div>

        {/* Agrega más cuadros de noticias según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
