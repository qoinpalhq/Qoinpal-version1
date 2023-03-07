import cta from "./cta.module.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useLoad from "../../hook/useLoad";
import useWindowSize from "../../hook/useWindowSize";



export default function Cta() {
  const { isLoaded } = useLoad();
  const {width} = useWindowSize();
  const desktop = width > 767;
  return (
    <section className={cta.cta}>
      <div className={cta.decor}></div>
<motion.div

        className={`${cta.content}  global-content-wrapper`}

        initial={desktop ? {opacity: 0, y: `100%` }: {}}

        animate={(desktop && isLoaded) ? { opacity: 1, y: `0` } : {}}

        transtion={{

          type: "tween",

          damping: 0.8,

          duration: 4,

          delay: 10,

          staggerChildren: 3,

        }}

      >
        <Link to="registration/waitlist" className={` ${cta.a}`}>
          <h2>
            join our <br /> waitlist
          </h2>
          <img className={cta.arrow} src={arrow} alt="apply" />
        </Link>

        <Link to="cause" className={` ${cta.a}`}>
          <h2>
            join our <br /> cause
          </h2>
          <img className={cta.arrow} src={arrow} alt="apply" />
        </Link>
      </motion.div>

    </section>
  );
}
