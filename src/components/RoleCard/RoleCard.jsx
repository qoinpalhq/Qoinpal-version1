import rc from "./role-card.module.css";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";
import arrow2 from "../../assets/arrow2.png";

import useGlobalContext from "/src/appContext";
import { useState, useRef } from "react";

export default function RoleCard({ title, level }) {
  const { handleApply } = useGlobalContext();
  const buttonRef = useRef(null);
  const [selected, setSelected] = useState("");

  function handleSelection() {
    setSelected(buttonRef.current.id);
  }
  return (
    <article className={`${rc.container}`}>
      <div className={`${rc.wrapper} flex-between`}>
        <div className={rc.col1}>
          <h3>{title}</h3>
          <p>{level}</p>
          <div className={`${rc[`btn-group`]}`}>
            <button
              className={selected === "year" ? "active" : ""}
              id="year"
              ref={buttonRef}
              onClick={handleSelection}
            >
              1 year
            </button>
            <button
              className={selected === "remote" ? "active" : ""}
              id="remote"
              ref={buttonRef}
              onClick={handleSelection}
            >
              Remote
            </button>
          </div>
        </div>

        <div className={rc.col2}>
          <img className={rc.icon} src={arrow2} alt="" />
          <p onClick={() => handleApply(title, level, selection)}>Apply</p>
        </div>
      </div>
    </article>
  );
}

RoleCard.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
