import jw from "./waitlist-registration.module.css";
import Form from "/src/components/Form/Form";
import Connect from "../../components/Connect/Connect";
import useWindowSize from "../../hook/useWindowSize";

import Header from "/src/components/Header/Header";
import logoMobile from "./arrow-left.png";
import Loader from "/src/components/Loader/Loader";
import useGlobalContext from "/src/appContext";

export default function JoinWaitlist() {
  const { width } = useWindowSize();
  const { loading } = useGlobalContext();
  const mobile = width < 480;

  if (loading) return <Loader />;
  return (
    <>
      {mobile && (
        <Header color="black" menu={""} logo={logoMobile} background="white" />
      )}

      <section
        className={`${jw.waitlist} flex-center `}
        // variants={variants}
        // initial="before"
        // animate="enter"
        // exit="after"
      >
        <div
          className={`${jw.col} ${jw.col1} 
        `}
        >
          <div className={`${jw[`inner-wrapper`]} ${jw.center}`}>
            <div className={jw.content}>
              <div className={jw.text}>
                <h2 className={jw.headline}>
                  {" "}
                  join our {mobile && <br />} waitlist
                </h2>
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
              <h2>
             

You can make a crypto transaction without owning an actual crypto wallet?.
              </h2>
            </div>

            <div className={jw.socials}>
              <Connect color="white" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
