import side from "./sidebar.module.css";
import useGlobalContext from "/src/appContext";
import logo from "/src/assets/logo.png";
import next from "./next.png";
import Header from "../Header/Header";
import { FaTimes } from "react-icons/fa";
export default function Sidebar() {
  const { isOpen, handleOpen } = useGlobalContext();
  return (
    <aside
      className={`${side[`mobile-menu`]} ${
        isOpen ? side.open : ""
      } global-header-padding`}
    >
      <Header color="white" menu={<FaTimes />} logo={false} />
      <ul className="global-content-wrapper">
        <li>
          <a
            href="mailto:contact@qoinpal.com?subject=Your%20subject%20here"
            className={` ${side.item}`}
          >
            <div className={side.text}>
              <h2>talk to us</h2>
              <p>contact@qoinpal.com</p>
            </div>

            <img className={side.arrow} src={next} alt="apply" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
