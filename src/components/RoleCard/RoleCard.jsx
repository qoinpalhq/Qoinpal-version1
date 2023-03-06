import rc from "./role-card.module.css";
import PropTypes from "prop-types";
import arrow2 from "../../assets/arrow2.png";
import useComposeMail from "./useComposeMail";
import Arrow from "/src/components/Arrow/Arrow";

export default function RoleCard({ title, level, duration, location }) {
  const { handleApply } = useComposeMail();

  return (
    <article className={`${rc.container}`}>
      <div className={`${rc.wrapper} flex-between`}>
        <div className={rc.col1}>
          <h3>{title}</h3>
          <p>{level}</p>
          <div className={`${rc[`btn-group`]}`}>
            <button>{duration}</button>
            <button>{location}</button>
          </div>
        </div>

        <div className={rc.col2}>
          <div onClick={() => handleApply(title, level, duration, location)}>
            {/* <Arrow size="3rem" color={"#ccfb00"} /> */}
            <img className={rc.icon} src={arrow2} alt="" />
          </div>
        </div>
      </div>
    </article>
  );
}

RoleCard.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
