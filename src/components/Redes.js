import React from "react";
import "./Redes.css"; // Archivo CSS para estilos
import facebookIcon from "../assets/facebook.jpg"; // Asegúrate de tener esta imagen
import tiktokIcon from "../assets/tiktok.jpg";
import linkedinIcon from "../assets/linkedin.jpg";
import twitterIcon from "../assets/twitter.jpg";
import instagramIcon from "../assets/instagram.jpg";
import youtubeIcon from "../assets/youtube.jpg";

const Redes = () => {
  const redes = [
    {
      nombre: "Facebook",
      link: "https://www.facebook.com/riverplateoficial",
      icon: facebookIcon,
      seguidores: "9.5 M seguidores",
    },
    {
      nombre: "TikTok",
      link: "https://www.tiktok.com/@riverplate",
      icon: tiktokIcon,
      seguidores: "3.9 M seguidores",
    },
    {
      nombre: "LinkedIn",
      link: "https://www.linkedin.com/company/club-atl-tico-river-plate/",
      icon: linkedinIcon,
      seguidores: "42 K seguidores",
    },
    {
      nombre: "Twitter",
      link: "https://x.com/RiverPlate",
      icon: twitterIcon,
      seguidores: "5.9 M seguidores",
    },
    {
      nombre: "Instagram",
      link: "https://www.instagram.com/riverplate/",
      icon: instagramIcon,
      seguidores: "8.8 M seguidores",
    },
    {
      nombre: "YouTube",
      link: "https://www.youtube.com/user/cariverplatetv",
      icon: youtubeIcon,
      seguidores: "541 K seguidores",
    },
  ];

  return (
    <div className="redes-container">
      <div className="redes-grid">
        {redes.map((red, index) => (
          <a
            key={index}
            href={red.link}
            target="_blank"
            rel="noopener noreferrer"
            className="redes-item"
          >
            <img src={red.icon} alt={red.nombre} className="redes-icon" />
            <div>
              <h2>{red.nombre}</h2>
              <p>{red.seguidores}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Redes;
