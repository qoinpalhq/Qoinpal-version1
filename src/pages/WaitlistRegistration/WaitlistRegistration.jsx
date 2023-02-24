import jw from "./waitlist-registration.module.css";
import Form from "../../components/Form/Form";
import Connect from "../../components/Connect/Connect";

export default function JoinWaitlist() {
  return (
    <section className={`${jw.waitlist} flex-center `}>
      <div className={`${jw.col} ${jw.col1}`}>
        <div className={`${jw[`inner-wrapper`]} ${jw.center}`}>
          <div className={jw.text}>
            <h2 className={jw.headline}>join our waitlist</h2>
            <p>Get an early access to our services</p>
          </div>
          <Form />
        </div>
      </div>

      <div className={`${jw.col} ${jw.col2}`}>
        <div className={`${jw[`inner-wrapper`]} ${jw.center}`}>
          <div className={jw.text}>
            <small>do you know ?</small>
            <h3>
              Mobile was Internet 2.0. It changed everything. Crypto is Internet
              3.0.
            </h3>
          </div>

          <div className={jw.socials}>
            <Connect color="white" />
          </div>
        </div>
      </div>
    </section>
  );
}
