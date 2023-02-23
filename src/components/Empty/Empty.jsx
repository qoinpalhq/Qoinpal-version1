import circle from "../../assets/circle.png";
import e from "./empty.module.css";

export default function Empty() {
  return (
    <div className={"flex-center"}>
      <div className={e.content}>
        <img src={circle} alt="oops" />
        <h3>OPS! WE DO NOT CURRENTLY HAVE ANY OPENINGS.</h3>
        <div className={e.alert}>
          <p>
            note: if you beleive your skillset would be valuable to us, please
            reach out to career@qoinpal.com
          </p>
        </div>
      </div>
    </div>
  );
}
