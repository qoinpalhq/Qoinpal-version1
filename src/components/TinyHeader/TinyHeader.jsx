import th from "./tiny-header.module.css";
import PropTypes from "prop-types";

export default function TinyHeader({ headline }) {
  return (
    <div className={th.header}>
      <small>{headline}</small>
      <div className={th.line}></div>
    </div>
  );
}
TinyHeader.propTypes = {
  headline: PropTypes.string.isRequired,
};
