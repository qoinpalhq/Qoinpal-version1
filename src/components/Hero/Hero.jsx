import hero from "./hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={`${hero.hero} `}>
      <div className="global-content-wrapper">
        <div className={hero.text}>
          <h1>fiat-to-crypto Payments made borderless.</h1>
          <p>
            {" "}
            The most convenient way for merchants in Africa to easily accept
            mobile money, crypto, cash payments and third-part wallet services
            from their customers
          </p>

          <Link to="more">
            <button className={hero.button}>Learn More {">"} </button>
          </Link>
        </div>
      </div>
    </section>
  );
  éééé;
}
