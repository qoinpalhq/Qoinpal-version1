import PropTypes from "prop-types";
export default function PageTitle({ color, title }) {
  return (
    <h2
      style={{
        color: color,
        textAlign: "center",
        paddingBottom: "3rem",
      }}
    >
      {title}
    </h2>
  );
}
PageTitle.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
