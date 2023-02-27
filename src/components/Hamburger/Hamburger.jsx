import ham from "./hamburger.module.css";

export default function Hamburger({ handleOpen }) {
  return (
    <>
      <input
        className={ham.checkbox}
        type="checkbox"
        name=""
        id=""
        onChange={handleOpen}
      />
      <div className={`${ham[`hamburger-lines`]}`}>
        <span className={`${ham.line} ${ham.line1} `}></span>
        <span className={`${ham.line} ${ham.line2} `}></span>
        <span className={`${ham.line} ${ham.line3} `}></span>
      </div>
    </>
  );
}
