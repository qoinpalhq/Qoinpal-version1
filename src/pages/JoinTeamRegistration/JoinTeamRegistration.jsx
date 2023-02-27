import jt from "./join-team-registration.module.css";
import SharedLayout from "../../components/SharedLayout";
import Vacancy from "../../components/Vacancy/Vacancy";
import Empty from "../../components/Empty/Empty";
import Title from "../../components/PageTitle";
import { useState } from "react";
import Header from "/src/components/Header/Header";
import logo from "/src/assets/logo/qoinpal-black.svg";
import { FaBars } from "react-icons/fa";
import Connect from "/src/components/Connect/Connect";
import useWindowSize from "../../hook/useWindowSize";

export default function JoinTeamRegistration() {
  const [vacancy, setVacancy] = useState(true);
  const { width } = useWindowSize();
  const mobile = width < 767;
  return (
    <>
      <Header menu={<FaBars />} color="black" logo={logo} background="#fff" />
      <section className={`${jt.container} global-header-padding flex-center`}>
        <div className={jt.cover}>
          <div className={`${jt.wrapper} global-content-wrapper`}>
            <Title color="black" title="join our team" />
            {vacancy ? <Vacancy /> : <Empty />}
          </div>
          {mobile ? <Connect color="black" /> : ""}
        </div>
      </section>
    </>
  );
}
