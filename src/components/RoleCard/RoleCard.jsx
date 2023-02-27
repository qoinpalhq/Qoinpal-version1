import rc from "./role-card.module.css";
import arrow from "../../assets/arrow.png";
import PropTypes from "prop-types";
import arrow2 from "../../assets/arrow2.png";
import { Link } from "react-router-dom";

export default function RoleCard({ handleApply, title, level }) {
  return (
    <article className={`${rc.container}`}>
      <div className={`${rc.wrapper} flex-between`}>
        <div className={rc.col1}>
          <h3>{title}</h3>
          <p>{level}</p>
          <div className={`${rc[`btn-group`]}`}>
            <button>1 year</button>
            <button>Remote</button>
          </div>
        </div>

        <div className={rc.col2}>
          <img className={rc.icon} src={arrow2} alt="" />
          <p onClick={() => handleApply(title, level)}>Apply</p>
        </div>
      </div>
    </article>
  );
}

RoleCard.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
