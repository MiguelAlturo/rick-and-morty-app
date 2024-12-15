import logo from '../../assets/logo.png'
import './header.scss'
import { NavItem } from "./NavItem";
import { Search } from "./Search";
import { Link } from 'react-router-dom';


const navItems = [
  { path: "/favorites", text: "Favoritos" }
];

const Header = () => {
  return (
    <header className="header_sticky">
      <Link to="/" className='header_sticky_logo'><img width='100px' src={logo} alt="Logo" /></Link>
      <nav className="header_sticky_nav">
        <ul className="header_sticky_nav_list">
          {navItems.map((item) => <NavItem key={item.path} path={item.path} text={item.text} />)}
        </ul>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
