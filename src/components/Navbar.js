import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/historia" style={styles.link}>Historia</Link>
      <Link to="/plantel" style={styles.link}>Plantel</Link>
      <Link to="/socios" style={styles.link}>Socios</Link>
      <Link to="/accesos" style={styles.link}>Accesos al Estadio</Link>
      <Link to="/redes" style={styles.link}>Redes</Link>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    background: '#d81f26',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    background: '#fff',
    color: '#d81f26',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Navbar;
