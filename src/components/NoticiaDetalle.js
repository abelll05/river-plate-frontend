import React from "react";
import { useParams, Link } from "react-router-dom";
import './NoticiaDetalle.css';

// Importar imágenes
import imagen1 from '../assets/imagen1v.jpg';
import imagen2 from '../assets/imagen2v.jpg';
import imagen3 from '../assets/imagen3v.jpg';
import imagen4 from '../assets/imagen4v.jpg';
import imagen5 from '../assets/imagen5v.jpg';
import imagen6 from '../assets/imagen6v.jpg';
import imagen7 from '../assets/imagen7v.jpg';
import imagen8 from '../assets/imagen8v.jpg';

const noticias = [
  {
    id: 1,
    title: "Mala noticia para Marcelo Gallardo",
    img: imagen1,
    content: `La durísima derrota ante Independiente Rivadavia de Mendoza no solo dejó una fea sensación por la manera en la que River se despidió de la LPF; Vélez volvió a dejar puntos en el camino, sino porque el golpe llegó en forma de noticia médica: Claudio Echeverri sufrió una lesión muscular que lo marginará al menos por los próximos 10 días. 
    En la vuelta del plantel del Millonario a los entrenamientos, el Muñeco y su cuerpo técnico recibieron la confirmación de que el Diablito padece una lesión muscular en el isquiotibial izquierdo, que aunque no llega a ser un desgarro, lo obligará a perderse el partido ante Estudiantes el próximo viernes 29 de noviembre.
    ¿Cuándo volvería a jugar Echeverri?
    Sin llegar a ser un desgarro, desde River confirman que trabajarán con el Diablito para intentar recuperarlo de cara al partido con San Lorenzo durante el próximo 4 de diciembre. De esta manera, el Muñeco Gallardo deberá empezar a pensar en su reemplazo para ir a La Plata: Lanzini o Mastantuono, los candidatos.
    Este partido ante San Lorenzo, junto al de Racing de la fecha 27, serán las últimas presentaciones de Claudio Echeverri en el Monumental con la camiseta de River. Sin saber si volverá alguna vez en el futuro, el Diablito apunta a despedirse dentro de la cancha antes de irse al Manchester City.
    ¿Quién jugará en lugar de Echeverri ante Estudiantes?
    Quien aparece como la primera alternativa al Diablito Echeverri pensando en el futuro de River es Franco Mastantuono. Con un rol similar, el otro juvenil podría meterse en el once para visitar al Pincha. Sin embargo, Manu Lanzini y Gonzalo Martínez también podrían aparecer como una variantes.`,
  },
  {
    id: 2,
    title: "Ganó Talleres y bajó a River en la tabla anual",
    img: imagen2,
    content: `River se bajó solo de la pelea por la Liga Profesional al caer ante Independiente Rivadavia en Mendoza y no supo aprovechar que los de arriba continúen dejando puntos en el camino. Sin embargo, el objetivo central siempre fue alcanzar la clasificación a la próxima Copa Libertadores y en las últimas horas Talleres lo pasó en la tabla anual.
    La fecha 24 del campeonato se cerró con la T visitando a Unión en Santa Fe y se vio un partidazo entre ellos. El Tatengue comenzó ganando desde el vestuario con un penal, pero el conjunto cordobés lo dio vuelta al final de los primeros 45 minutos y en el segundo tiempo estiró la diferencia. El local descontó cuando se terminaba el encuentro y finalizó 3-2 a favor de los Matadores.
    Con este resultado, Talleres no solo se acomodó en la lucha de la Liga Profesional al quedar a tres unidades del puntero Vélez, si no que superó a al Millonario en la tabla anual. Actualmente, la T se mantiene en la segunda plaza que saca pasaje al certamen continental de 2025 con 66 puntos, pasando a Racing (64) y dejando al Más Grande en el cuarto puesto con 63.`,
  },
  {
    id: 3,
    title: "River presentó la nueva pantalla LED del estadio Monumental",
    img: imagen3,
    content: `River terminó una de las últimas obras del plan de remodelación y modernización del estadio Monumental. Así, este miércoles presentó la nueva pantalla LED, que se estrenará este sábado en la final de la Copa Libertadores 2024 entre Atlético Mineiro y Botafogo.
    En medio de las polémicas y el enojo de los hinchas por el actuar de Conmebol al tapar el escudo de River de la fachada del estadio de cara al duelo por el título, el Millonario anunció el cambio de dispositivo. “Más grande. Más Resolución. Más Tecnología. Más Monumental que nunca”, reza el video de presentación, que recopila imágenes históricas con la vieja pantalla como protagonista.
    “La pantalla del Más Monumental, historia y futuro de nuestra casa. El Club renovó por completo la pantalla ubicada en la Sívori alta, un espacio icónico del Estadio que pasa a contar con un mayor tamaño, resolución superior y más visibilidad para seguir mejorando la experiencia de los hinchas”, describió el Millonario.`,
  },
  {
    id: 4,
    title: "La frase de Pablo Solari que puso en duda su futuro en River",
    img: imagen4,
    content: `Se termina el 2024 para River y es probable que varios jugadores dejen el club de cara al próximo año. Con un partido por jugar antes de entrar en vacaciones, Marcelo Gallardo y los dirigentes ya están planificando el rearmado del plantel. En ese marco, uno de los casos a atender es el de Pablo Solari, que anoche se despachó con un doblete frente a Rosario Central.
    En levantada durante los últimos encuentros pero aún algo resistido por los hinchas, el atacante es uno de los futbolistas que la dirigencia apunta a vender en el corto plazo, aunque solo quieren hacerlo una vez que tengan el 100% del pase: actualmente, River es dueño del 60% de su ficha y el 40% restante se reparte en partes iguales entre Talleres de Córdoba y Colo Colo.`,
  },
  {
    id: 5,
    title: "Germán Pezzella reveló cuál fue la lesión que tuvo y por qué se perdió tantos partidos",
    img: imagen5,
    content: `Después de más de un mes sin actividad profesional, Germán Pezzella volvió a jugar en River en la goleada por 4-0 a Rosario Central en el Estadio Monumental. El defensor campeón del mundo tuvo una larga lesión, de la cual había un manto de misterio por no haber sido comunicada de manera oficial. En conferencia, habló y reveló qué fue lo que le pasó.
    En principio, los informes mencionaban una molestia muscular en el gemelo derecho y en el off se hablaba de un desgarro. Esto lo mantuvo apartado durante los entrenamientos y poco a poco comenzó a dejar los trabajos diferenciados para acoplarse a sus compañeros. Cuando parecía que iba a regresar ante Independiente Rivadavia, se conoció que no iba a viajar y luego no estuvo frente a San Lorenzo.`,
  },
  {
    id: 6,
    title: "Venta de entradas para la final de Reserva de River vs. San Lorenzo en Platense: cómo comprar y cuándo salen",
    img: imagen6,
    content: `River quiere coronar una campaña extraordinaria en Reserva con el título en la categoría tras 10 años de sequía. Puntero en su zona y ganando en los 90 minutos los tres partidos de la fase final, al Millonario le queda solo un escollo: San Lorenzo, este martes desde las 20.00 en la cancha de Platense en búsqueda del título.
    El encuentro va a tener presencia de ambas hinchadas y River dio a conocer la metodología para el canje de tickets. Habrá prioridad para socios (solo una entrada por socio) y luego, de existir un remanente, los Somos River podrán canjear sus respectivas ubicaciones. Todo se hará a través de River ID.`,
  },
  {
    id: 7,
    title: "Germán Pezzella y el respaldo a Gallardo en medio del dolor por la muerte de su padre",
    img: imagen7,
    content: `Noche de muchas emociones y sentimientos encontrados. River le ganó 4-0 a Rosario Central, se clasificó a la Copa Libertadores 2025 pero, por sobre todas las cosas, le dio un inmenso abrazo a su entrenador. Tras la pérdida de Máximo, su padre, Marcelo Gallardo no quiso dejar en banda a sus jugadores, estuvo en el banco de suplentes y no pudo aguantar la emoción.
    En un estremecedor minuto de silencio, las 84 mil personas que dijeron presentes en el Monumental y todos los jugadores le rindieron homenaje a su papá, que falleció el sábado por la madrugada a los 71 años. Durante el partido, los futbolistas fueron a abrazarlo en cada uno de los cuatro goles ante el Canalla.`,
  },
  {
    id: 8,
    title: "Con River, todos los equipos clasificados a la Copa Libertadores 2025 ",
    img: imagen8,
    content: `Ahora sí, River se clasificó a la Copa Libertadores 2025 y salvo una catástrofe, lo hará directamente a la fase de grupos. La única forma de que tenga que jugar el repechaje es la combinación de Huracán campeón de la Liga Profesional, Central Córdoba de la Coap Argentina y el Millo quedando por debajo de Talleres en la tabla anual (hoy lo está, a dos puntos).

Si bien matemáticamente es posible, en los papeles es poco probable que eso ocurra (el Globo juega esta noche con Huracán y allí el panorama estará más claro). Con la victoria frente a Rosario Central, el Más Grande se aseguró su lugar en el próximo certamen continental y a la par lo hicieron varios equipos de otras ligas.
Aún no está confirmada la fecha de arranque de la Libertadores 2025, pero River sabe que dirá presente. Será su undécima participación consecutiva, un número que muy pocos clubes ostentan. Repasá, uno por uno, todos los clasificados hasta el momento.
Todos los equipos clasificados a la Copa Libertadores

    San Antonio Bulo Bulo (Bolivia)
    Estudiantes de La Plata (Argentina)
    Racing (Argentina)
    River Plate (Argentina)
    Talleres (Argentina)
    Inter de Porto Alegre (Brasil)
    Flamengo (Brasil)
    Palmeiras (Brasil)
    Fortaleza (Brasil)
    Botafogo (Brasil)
    Sao Paulo (Basil)
    Corinthians (Brasil)
    Bahía (Brasil)
    Libertad (Paraguay)
    Olimpia (Paraguay)
    Cerro Porteño (Paraguay)
    Atlético Bucaramanga (Colombia)
    Deportes Tolima (Colombia)
    Independiente Santa Fe (Colombia)
    Universidad de Chile (Chile)
    Colo Colo (Chile)
    Ñublense (Chile)
    Deportes Iquique (Chile)
    Peñarol (Uruguay)
    Nacional (Uruguay)
    Defensor Sporting (Uruguay)
    Boston River (Uruguay)
    Universitario (Perú)
    Carabobo (Venezuela)
    Universidad Central (Venezuela)
    Deportivo Táchira (Venezuela)
    Monagas (Venezuela)
    Melgar (Perú)
    Sporting Cristal (Perú)
    Alianza Lima (Perú)
    El Nacional (Ecuador)
    Barcelona (Ecuador)
    Liga de Quito (Ecuador)
    Independiente del Valle (Ecuador)
Los cupos que faltan definirse

    Argentina: campeón de la Liga Profesional 2024, campeón de la Copa Argentina y las tres plazas de tabla anual.
    Bolivia: campeón del Clausura 2024, mejor ubicado -no campeón- de la tabla acumulada de la Primera División 2024 y segundo mejor ubicado -no campeón- de la tabla acumulada de la Primera División 2024.
    Colombia: campeón del Finalización 2024 y campeón de la Copa Colombia 2024.`,
  },
];

const NoticiaDetalle = () => {
  const { id } = useParams(); // Captura el parámetro dinámico de la URL
  const noticia = noticias.find((n) => n.id === parseInt(id)); // Busca la noticia por ID

  if (!noticia) {
    return (
      <div className="noticia-detalle">
        <h2>Noticia no encontrada</h2>
        <Link to="/">Volver a la página principal</Link>
      </div>
    );
  }

  return (
    <div className="noticia-detalle">
      <h1>{noticia.title}</h1>
      <img src={noticia.img} alt={noticia.title} className="noticia-detalle-img" />
      <p>{noticia.content}</p>
      <Link to="/" className="back-link">Volver al inicio</Link>
    </div>
  );
};

export default NoticiaDetalle;
