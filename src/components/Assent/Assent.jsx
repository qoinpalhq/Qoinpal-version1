export default function Assent({ background, style }) {
  const myStyle = {
    background,
    zIndex: -1,
    position: "absolute",
    height: "1.5625rem",
    width: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-30%)",
    borderRadius: "10px",
    ...style, // merge inline styles passed as props
  };
  return <div style={myStyle}></div>;
}
