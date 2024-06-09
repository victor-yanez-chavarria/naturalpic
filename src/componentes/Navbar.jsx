import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/desafio2-naturalpic/"> Home </Link> | <Link to="/desafio2-naturalpic/favoritos"> Favoritos </Link>
    </nav>
  );
}
