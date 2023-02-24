import c from "./congrats.module.css";
import image from "../../assets/congrats.png";
import Connect from "../../components/Connect/Connect";
import { motion } from "framer-motion";
import variants from "../../Variables";

export default function Congrats() {
  return (
    <motion.section
      className={`${c.container} flex-center`}
      variants={variants}
      initial="before"
      animate="enter"
      exit="after"
    >
      <div className={`${c.wrapper}`}>
        <div className={`${c.content}`}>
          <img src={image} alt="" />
          <h3 className={`${c.text}`}>
            Congratulations 🎉 you’re part of the lucky ones to enjoy first hand
            borderless fiat-to-crypto exchange
          </h3>
        </div>

        <Connect color="white" />
      </div>
    </motion.section>
  );
}
