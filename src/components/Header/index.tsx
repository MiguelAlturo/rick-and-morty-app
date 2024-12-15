import logo from '../../assets/logo.png'
import './header.scss'
import { NavItem } from "./NavItem";
import { Search } from "./Search";


const navItems = [
  { path: "/favorites", text: "Favoritos" }
];

const Header = () => {
  return (
    <header className="header_sticky">
      <a href="/"><img width='100px' src={logo} alt="Logo" /></a>
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
