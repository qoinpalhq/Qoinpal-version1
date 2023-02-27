import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import head from "./header.module.css";
import ham from "/src/components/Hamburger/hamburger.module.css";
import classNames from "classnames";
import useGlobalContext from "/src/appContext";

export default function Header({ color, menu, logo, background }) {
  const { isOpen, handleOpen } = useGlobalContext();

  return (
    <header className={`${head.header}`} style={{ background }}>
      <nav className={`${head.nav} flex-between`} style={{ color }}>
        <NavLink to="/" className={classNames(head.logo, ham.logo)}>
          <img
            src={logo}
            alt={"logo"}
            style={{ display: isOpen ? "none" : "block" }}
          />
        </NavLink>

        <ul className={`${head[`desktop-menu`]}`}>
          <li>
            <button style={{ color, borderBottom: `0.2rem solid ${color}` }}>
              <a
                style={{ color }}
                href="mailto:contact@qoinpal.com?subject=Your%20subject%20here"
              >
                contact@qoinpal.com
              </a>
            </button>
          </li>
        </ul>
        <div onClick={handleOpen} className={head.hamburger}>
          {menu}
        </div>
      </nav>
    </header>
  );
}
Header.propTypes = {
  menu: PropTypes.element,
  logo: PropTypes.node,
  color: PropTypes.string.isRequired,
};
