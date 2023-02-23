import jt from "./join-team.module.css";
import { Link } from "react-router-dom";
import TinyHeader from "../TinyHeader/TinyHeader";
import useWindowSize from "../../hook/useWindowSize";
import Connect from "../Connect/Connect";

export default function JoinTeam() {
  const { width } = useWindowSize();
  const mobile = width < 767;
  return (
    <section className={`${jt.container} flex-center global-header-padding`}>
      <div className="global-content-wrapper">
        <div className={jt.text}>
          <TinyHeader headline={"Join our team"} />
          <h2>
            The open source project qoinpal strives to process 1,000 or more
            successful transactions by 2023. In order to do that, we are calling
            to anyone who is passionate about globalizing crypto, both
            technically and otherwise.
          </h2>

          <Link to="/registration/team">
            <button className={jt.button}>Join our Team {">"}</button>
          </Link>

          {mobile ? <Connect /> : ""}
        </div>
      </div>
    </section>
  );
}
