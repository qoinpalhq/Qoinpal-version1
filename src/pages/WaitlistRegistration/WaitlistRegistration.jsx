import jw from "./waitlist-registration.module.css";
import Form from "../../components/Form/Form";
import Connect from "../../components/Connect/Connect";
import useWindowSize from "../../hook/useWindowSize";
import { motion } from "framer-motion";
import variants from "../../Variables";

export default function JoinWaitlist() {
  const { width } = useWindowSize();
  const mobile = width < 767;

  return (
    <section
      className={`${jw.waitlist} flex-center `}
      variants={variants}
      initial="before"
      animate="enter"
      exit="after"
    >
      <div className={`${jw.col} ${jw.col1}`}>
        <div className={`${jw[`inner-wrapper`]} ${jw.center}`}>
          <div className={jw.content}>
            <div className={jw.text}>
              <h2 className={jw.headline}>join our waitlist</h2>
              <p>Get an early access to our services</p>
            </div>
            <Form />
          </div>

          {mobile ? (
            <div className={jw.socials}>
              {" "}
              <Connect color="black" />{" "}
            </div>
          ) : (
            ""
          )}
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
