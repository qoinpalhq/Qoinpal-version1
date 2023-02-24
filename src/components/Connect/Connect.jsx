import c from "./connect.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Connect({ color }) {
  return (
    <section className={`${c.container} `} style={{ color: color }}>
      <small className={c.connect}>Connect with us</small>
      <div className={c.line} style={{ backgroundColor: color }}></div>
      <div className={c.socials}>
        <a href="#" target="_blank" style={{ color: color }}>
          <FaFacebook />
        </a>
        <a href="#" target="_blank" style={{ color: color }}>
          <FaTwitter />
        </a>
        <a href="#" target="_blank" style={{ color: color }}>
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
