import hero from "./hero.module.css";
import { Link } from "react-router-dom";
import Assent from "/src/components/Assent/Assent";
import useWindowResize from "../../hook/useWindowSize";

export default function Hero() {
  const { width } = useWindowResize();
  const mobile = width < 480;
  return (
    <section
      className={`${hero.hero}
     `}
    >
      <div className="global-content-wrapper">
        <div className={hero.text}>
          <div className={hero.heading}>
            <h1>
              <span className={hero.span1}>
                {" "}
                {!mobile && <Assent background="#FFA000" />} fiat-to-crypto{" "}
              </span>
              Payments made
              <span className={hero.span2}>
                {" "}
                borderless.
                {!mobile && <Assent background="white" />}
              </span>{" "}
            </h1>
          </div>

          <p>
            {" "}
            The most convenient way for merchants in Africa to easily accept
            mobile money, crypto, cash payments and third-party wallet services
            from their customers
          </p>

          <Link to="more">
            <button className={hero.button}>Learn More {">"} </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
