import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

import imagen1 from '../assets/imagen1.jpg';
import imagen2 from '../assets/imagen2.jpg';
import imagen3 from '../assets/imagen3.jpg';
import imagen4 from '../assets/imagen4.jpg';
import imagen5 from '../assets/imagen5.jpg';
import imagen6 from '../assets/imagen6.jpg';
import imagen7 from '../assets/imagen7.jpg';
import imagen8 from '../assets/imagen8.jpg';

const noticias = [
  {
    id: 1,
    img: imagen1,
    title: "Mala noticia para Marcelo Gallardo",
    desc: "Se confirmó la lesión del Diablito Echeverri en River",
  },
  {
    id: 2,
    img: imagen2,
    title: "Ganó Talleres y bajó a River en la tabla anual",
    desc: "¿Cómo está la clasificación a la Copa Libertadores 2025?",
  },
  {
    id: 3,
    img: imagen3,
    title: "River presentó la nueva pantalla LED del estadio Monumental",
    desc: "Con un video que recopila momentos históricos enmarcados en la vieja pantalla, el club oficializó la nueva estructura. ¿Cuándo se estrena?",
  },
  {
    id: 4,
    img: imagen4,
    title: "La frase de Pablo Solari que puso en duda su futuro en River",
    desc: "El delantero marcó un doblete ante Rosario Central y fue de lo más destacado del equipo, en medio de rumores sobre una posible salida.",
  },
  {
    id: 5,
    img: imagen5,
    title: "Germán Pezzella reveló cuál fue la lesión que tuvo",
    desc: "Pezzella habló de la lesión que sufrió y le impidió no estar presente en el último mes. ¿Qué le pasó?",
  },
  {
    id: 6,
    img: imagen6,
    title: "Venta de entradas para la final de Reserva",
    desc: "River se juega el título en Reserva ante San Lorenzo y los hinchas podrán ir a alentar a los pibes. Los detalles.",
  },
  {
    id: 7,
    img: imagen7,
    title: "Pezzella y el respaldo a Gallardo",
    desc: "Uno de los referentes habló de las horas delicadas tras la muerte de Máximo Gallardo.",
  },
  {
    id: 8,
    img: imagen8,
    title: "Con River, todos los equipos clasificados a la Libertadores",
    desc: "Repasá, uno por uno, todos los equipos que ya aseguraron su lugar en la próxima Copa Libertadores.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/noticia/${id}`);
  };

  return (
    <div className="home-container">
      <div className="news-grid">
        {noticias.map((noticia) => (
          <div
            key={noticia.id}
            className="news-item"
            onClick={() => handleNavigate(noticia.id)} 
          >
            <img src={noticia.img} alt={noticia.title} className="news-image" />
            <div className="news-content">
              <h3>{noticia.title}</h3>
              <p>{noticia.desc}</p>
              <p className="leer-mas-text">Haga click en la noticia para ver más</p> {/* Nuevo texto */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
