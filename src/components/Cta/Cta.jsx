import cta from "./cta.module.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className={cta.cta}>
      <div className={`${cta.content} flex-between global-content-wrapper`}>
        <Link to="registration/waitlist" className={`flex-center ${cta.a}`}>
          <h2>join our waitlist</h2>
          <img className={cta.arrow} src={arrow} alt="apply" />
        </Link>

        <Link to="registration/team" className={`flex-center ${cta.a}`}>
          <h2>join our cause</h2>
          <img className={cta.arrow} src={arrow} alt="apply" />
        </Link>
      </div>
    </section>
  );
}
