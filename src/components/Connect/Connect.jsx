import c from "./connect.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Connect() {
  return (
    <section className={`${c.container} flex-center`}>
      <small className={c.connect}>Connect with us</small>
      <div className={c.line}></div>
      <div className={c.socials}>
        <a href="#" target="_blank">
          <FaFacebook />
        </a>
        <a href="#" target="_blank">
          {" "}
          <FaTwitter />
        </a>
        <a href="#" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
