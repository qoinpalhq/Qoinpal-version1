import cta from "./cta.module.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useLoad from "../../hook/useLoad";

export default function Cta() {
  const { isLoaded } = useLoad();
  return (
    <section className={cta.cta}>
      <div className={cta.decor}></div>
      <div
        className={`${cta.content}  global-content-wrapper`}
       
       
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
      </div>

    </section>
  );
}
