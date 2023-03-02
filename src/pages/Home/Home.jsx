import Hero from "../../components/Hero/Hero";
import Cta from "../../components/Cta/Cta";
import h from "./home.module.css";

import { FaBars } from "react-icons/fa";
import logo from "/src/assets/logo/qoinpal-black.svg";
import Header from "/src/components/Header/Header";

export default function Home() {
  return (
    <>
      <Header
        menu={<FaBars />}
        color="black"
        logo={logo}
        background={"#ccfb00"}
      />

      <main className={`${h.container} global-header-padding`}>
        <Hero />

        <Cta />
      </main>
    </>
  );
}
