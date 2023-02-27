import React from "react";
import lm from "./learn-more.module.css";
import Connect from "../../components/Connect/Connect";
import Faq from "../../components/Faq/Faq";
import data from "../../components/Faq/data";
import Header from "/src/components/Header/Header";
import logoMobile from "./arrow-left.png";
import logoDesktop from "/src/assets/logo/qoinpal-white.svg";
import useWindowSize from "../../hook/useWindowSize";
import { FaBars } from "react-icons/fa";

export default function LearnMore() {
  const { width } = useWindowSize();
  const mobile = width < 767;
  return (
    <>
      <Header
        color="white"
        logo={mobile ? logoMobile : logoDesktop}
        menu={<FaBars />}
        background="#1E1E1E"
      />
      <main className={`${lm.container} global-header-padding`}>
        <div className={`${lm.wrapper} global-content-wrapper`}>
          <div className={lm.content}>
            {" "}
            <h2 className={lm.title}>learn more about us</h2>
            <div>
              {data.map((x) => (
                <Faq key={x.id} {...x} />
              ))}
            </div>{" "}
          </div>

          <Connect color="white" />
        </div>
      </main>
    </>
  );
}
