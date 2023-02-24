import c from "./congrats.module.css";
import image from "../../assets/congrats.png";
import Connect from "../../components/Connect/Connect";

export default function Congrats() {
  return (
    <section className={`${c.container} flex-center`}>
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
    </section>
  );
}
