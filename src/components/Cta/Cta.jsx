import cta from "./cta.module.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import decor from "/src/assets/decor.png";

export default function Cta() {
  return (
    <section className={cta.cta}>
      <div className={cta.decor}>
        <img src={decor} alt="" />
      </div>
      <div className={`${cta.content}  global-content-wrapper`}>
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
