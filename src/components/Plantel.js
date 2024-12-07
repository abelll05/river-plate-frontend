import React from "react";
import './Plantel.css';

const jugadores = [
  // Arqueros
  { name: "Franco Armani", position: "Arquero", edad: 38, altura: "1.89 m", dorsal: 1 },
  { name: "Jeremías Ledesma", position: "Arquero", edad: 31, altura: "1.86 m", dorsal: 25 },
  { name: "Lucas Lavagnino", position: "Arquero", edad: 20, altura: "1.90 m", dorsal: 37 },
  { name: "Santiago Beltrán", position: "Arquero", edad: 20, altura: "1.89 m", dorsal: 41 },
  // Defensores
  { name: "Ramiro Funes Mori", position: "Defensor", edad: 33, altura: "1.87 m", dorsal: 3 },
  { name: "Federico Gattoni", position: "Defensor", edad: 25, altura: "1.83 m", dorsal: 6 },
  { name: "Enzo Díaz", position: "Defensor", edad: 28, altura: "1.75 m", dorsal: 13 },
  { name: "Leandro González Pirez", position: "Defensor", edad: 32, altura: "1.86 m", dorsal: 14 },
  { name: "Fabricio Bustos", position: "Defensor", edad: 28, altura: "1.67 m", dorsal: 20 },
  { name: "Paulo Díaz", position: "Defensor", edad: 30, altura: "1.82 m", dorsal: 17 },
  { name: "Milton Casco", position: "Defensor", edad: 36, altura: "1.70 m", dorsal: 23 },
  { name: "Daniel Zabala", position: "Defensor", edad: 21, altura: "1.82 m", dorsal: 22 },
  { name: "Marcos Acuña", position: "Defensor", edad: 33, altura: "1.72 m", dorsal: 25 },
  { name: "Agustín Santana", position: "Defensor", edad: 27, altura: "1.75 m", dorsal: 27 },
  { name: "Germán Pezzella", position: "Defensor", edad: 33, altura: "1.87 m", dorsal: 33 },
  // Volantes
  { name: "Nicolás Fonseca", position: "Volante", edad: 26, altura: "1.81 m", dorsal: 4 },
  { name: "Matías Kranevitter", position: "Volante", edad: 31, altura: "1.79 m", dorsal: 5 },
  { name: "Manuel Lanzini", position: "Volante", edad: 31, altura: "1.67 m", dorsal: 10 },
  { name: "González Martínez", position: "Volante", edad: 31, altura: "1.72 m", dorsal: 18 },
  { name: "Claudio Echeverri", position: "Volante", edad: 18, altura: "1.71 m", dorsal: 19 },
  { name: "Rodrigo Villagra", position: "Volante", edad: 23, altura: "1.78 m", dorsal: 23 },
  { name: "Ignacio Fernández", position: "Volante", edad: 34, altura: "1.82 m", dorsal: 26 },
  { name: "Rodrigo Aliendro", position: "Volante", edad: 33, altura: "1.78 m", dorsal: 29 },
  { name: "Franco Mastantuono", position: "Volante", edad: 17, altura: "1.80 m", dorsal: 30 },
  { name: "Santiago Simón", position: "Volante", edad: 22, altura: "1.81 m", dorsal: 31 },
  { name: "Jonás Luna", position: "Volante", edad: 19, altura: "1.75 m", dorsal: 34 },
  { name: "Tobías Leiva", position: "Volante", edad: 20, altura: "1.85 m", dorsal: 35 },
  { name: "Santiago Lencina", position: "Volante", edad: 19, altura: "1.73 m", dorsal: 39 },
  // Delanteros
  { name: "Adam Bareiro", position: "Delantero", edad: 28, altura: "1.84 m", dorsal: 7 },
  { name: "Maximiliano Meza", position: "Delantero", edad: 31, altura: "1.80 m", dorsal: 8 },
  { name: "Miguel Borja", position: "Delantero", edad: 31, altura: "1.83 m", dorsal: 9 },
  { name: "Facundo Colidio", position: "Delantero", edad: 24, altura: "1.80 m", dorsal: 11 },
  { name: "Agustín Ruberto", position: "Delantero", edad: 18, altura: "1.85 m", dorsal: 32 },
  { name: "Pablo Solari", position: "Delantero", edad: 23, altura: "1.81 m", dorsal: 36 },
  { name: "Ian Subiabre", position: "Delantero", edad: 17, altura: "1.72 m", dorsal: 38 },
  { name: "Tomás Nasif", position: "Delantero", edad: 20, altura: "1.83 m", dorsal: 13 },
];

const Plantel = () => {
  const categorias = ['Arquero', 'Defensor', 'Volante', 'Delantero'];

  return (
    <div className="plantel-container">
      <h1>Plantel de River Plate</h1>
      {categorias.map((categoria) => (
        <section key={categoria}>
          <h2>{categoria}s</h2>
          <ul>
            {jugadores
              .filter((jugador) => jugador.position === categoria)
              .map((jugador, index) => (
                <li key={index}>
                  <strong>{jugador.name}</strong> - Edad: {jugador.edad} años, Altura: {jugador.altura}, Dorsal: {jugador.dorsal}
                </li>
              ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Plantel;
