import c from "./congrats.module.css";
import image from "../../assets/congrats.png";
import Connect from "../../components/Connect/Connect";
import { motion } from "framer-motion";
import variants from "../../Variables";
import { Link } from "react-router-dom";

export default function Congrats() {
  return (
    <main className={`${c.container} flex-center`}>
      <div className={`${c.wrapper}`}>
        <div className={`${c.content}`}>
          <img src={image} alt="" />
          <h2 className={`${c.text}`}>
            Congratulations 🎉 you’re part of the lucky ones to enjoy first hand
            borderless fiat-to-crypto exchange
          </h2>

          <Link to="/">
            {" "}
            <button className={c.button}>{"<"}back home</button>
          </Link>
        </div>

        <Connect color="white" />
      </div>
    </main>
  );
}
