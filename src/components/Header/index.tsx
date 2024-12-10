import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <Link to="/personajes">Personajes</Link>
        <Link to="/favorites">Favoritos</Link>
      </ul>
    </nav>
  );
};

export default Header;
