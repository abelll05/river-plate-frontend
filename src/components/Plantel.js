import React from "react";
import './Plantel.css';


const jugadores = [
  // Arqueros
  { name: "Franco Armani", position: "Arquero" },
  { name: "Jeremías Ledesma", position: "Arquero" },
  { name: "Lucas Lavagnino", position: "Arquero" },
  { name: "Santiago Beltrán", position: "Arquero" },
  // Defensores
  { name: "Ramiro Funes Morí", position: "Defensor" },
  { name: "Federico Gattoni", position: "Defensor" },
  { name: "Enzo Diaz", position: "Defensor" },
  { name: "Leandro Gonzalez Pirez", position: "Defensor" },
  { name: "Fabricio Bustos", position: "Defensor" },
  { name: "Paulo Diaz", position: "Defensor" },
  { name: "Milton Casco", position: "Defensor" },
  { name: "Daniel Zabala", position: "Defensor" },
  { name: "Marcos Acuña", position: "Defensor" },
  { name: "Agustín Santana", position: "Defensor" },
  { name: "German Pezzela", position: "Defensor" },
  // Volantes
  { name: "Nicolas Fonseca", position: "Volante" },
  { name: "Matias Kranevitter", position: "Volante" },
  { name: "Manuel Lanzini", position: "Volante" },
  { name: "Gonzalez Martínez", position: "Volante" },
  { name: "Claudio Echeverri", position: "Volante" },
  { name: "Rodrigo Villagra", position: "Volante" },
  { name: "Ignacio Fernández", position: "Volante" },
  { name: "Rodrigo Aliendro", position: "Volante" },
  { name: "Franco Mastantuono", position: "Volante" },
  { name: "Santiago Simón", position: "Volante" },
  { name: "Jonas Luna", position: "Volante" },
  { name: "Tobias Leiva", position: "Volante" },
  { name: "Santiago Lencina", position: "Volante" },
  // Delanteros
  { name: "Adam Bareiro", position: "Delantero" },
  { name: "Maximiliano Meza", position: "Delantero" },
  { name: "Miguel Borja", position: "Delantero" },
  { name: "Facundo Colidio", position: "Delantero" },
  { name: "Agustín Ruberto", position: "Delantero" },
  { name: "Pablo Solari", position: "Delantero" },
  { name: "Ian Suriabre", position: "Delantero" },
  { name: "Tomas Nasif", position: "Delantero" },
];

const Plantel = () => {

  const arqueros = jugadores.filter((jugador) => jugador.position === "Arquero");
  const defensores = jugadores.filter(
    (jugador) => jugador.position === "Defensor"
  );
  const volantes = jugadores.filter((jugador) => jugador.position === "Volante");
  const delanteros = jugadores.filter(
    (jugador) => jugador.position === "Delantero"
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Plantel de River Plate</h1>

      <section>
        <h2>Arqueros</h2>
        <ul>
          {arqueros.map((jugador, index) => (
            <li key={index}>{jugador.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Defensores</h2>
        <ul>
          {defensores.map((jugador, index) => (
            <li key={index}>{jugador.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Volantes</h2>
        <ul>
          {volantes.map((jugador, index) => (
            <li key={index}>{jugador.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Delanteros</h2>
        <ul>
          {delanteros.map((jugador, index) => (
            <li key={index}>{jugador.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Plantel;
