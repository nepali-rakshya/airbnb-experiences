import logo from "../img/logo.png";
import NavBarCSS from "./NavBar.module.css";
import cn from "classnames";

const NavBar = () => {
  return (
    <nav className={cn(NavBarCSS.nav__img)}>
      <img src={logo} alt="airbnb-logo" width="100px" />
    </nav>
  );
};

export default NavBar;
