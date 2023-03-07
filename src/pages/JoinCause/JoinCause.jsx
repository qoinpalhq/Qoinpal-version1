import jc from "./join-cause.module.css";
import { Link } from "react-router-dom";
import TinyHeader from "/src/components/TinyHeader/TinyHeader";
import useWindowSize from "../../hook/useWindowSize";
import Connect from "/src/components/Connect/Connect";
import Header from "/src/components/Header/Header";
import logo from "/src/assets/logo/qoinpal-black.svg";
import { FaBars } from "react-icons/fa";

export default function JoinCause() {
  const { width } = useWindowSize();
  const mobile = width < 767;
  return (
    <>
      <Header menu={<FaBars />} color="black" logo={logo} background="white" />
      <section className={`${jc.container} flex-center global-heading-padding`}>
        <div className={`${jc.wrapper} global-content-wrapper`}>
          <div className={jc.text}>
            <TinyHeader headline={"Join our team"} />
            <h3>
              Qoinpal strives to process 1,000 or more
              successful transactions by 2023. In order to do that, we are
              calling to anyone who is passionate about globalizing crypto, both
              technically and otherwise.
            </h3>

            <Link to="/registration/team">
              <button className={jc.button}>Join our Team {">"}</button>
            </Link>
          </div>
          {mobile ? <Connect color="black" /> : ""}
        </div>
      </section>
    </>
  );
}
