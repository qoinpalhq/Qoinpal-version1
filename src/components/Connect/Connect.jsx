import c from "./connect.module.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Connect({ color }) {
  return (
    <section className={`${c.container} `} style={{ color: color }}>
      <small className={c.connect}>Connect with us</small>
      <div className={c.line} style={{ backgroundColor: color }}></div>
      <div className={c.socials}>
        <a
          href="https://www.linkedin.com/in/qoinpalhq/"
          target="_blank"
          style={{ color: color }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/qoinpalhq"
          target="_blank"
          style={{ color: color }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/qoinpalhq/"
          target="_blank"
          style={{ color: color }}
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
