import f from "./faq.module.css";

export default function Faq({ question, answer }) {
  return (
    <article className={f.group}>
      <div>
        <small className={f.question}>{question}</small>{" "}
        <div className={f.line}></div>
      </div>
      <div className={f.answer}>
        <p>{answer}</p>{" "}
      </div>
    </article>
  );
}
