import logo from "../../assets/logo.png";
import head from "./header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className={`${head.header} global-content-wrapper`}>
      <nav className={`${head.nav} flex-between`}>
        <NavLink to="/" className={`${head.logo}`}>
          <img src={logo} alt={"logo"} />
        </NavLink>
        <button>
          <a href="#">contact@qoinpal.com</a>
        </button>
      </nav>
    </header>
  );
}
