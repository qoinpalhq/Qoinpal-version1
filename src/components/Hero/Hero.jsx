import hero from "./hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className={`${hero.hero} flex-center global-header-padding`}>
      <div className="global-content-wrapper">
        <div className={hero.text}>
          <h1>Fiat-to-crypto Payments made borderless.</h1>
          <p>
            {" "}
            The most convenient way for merchants in Africa to easily accept
            mobile money, crypto, cash payments and third-part wallet services
            from their customers
          </p>

          <button className={hero.button}>Learn More {">"}</button>
        </div>
        <div className="hero-decor"></div>
      </div>
    </section>
  );
}
