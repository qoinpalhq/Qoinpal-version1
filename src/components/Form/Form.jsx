import f from "./form.module.css";
import useGlobalContext from "../../appContext";
import useFormLogic from "./useFormLogic";
export default function Form() {
  const { errors, error, loading } = useGlobalContext();
  const { handleChange, handleSubmit, formData } = useFormLogic();

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Alert message="Error submitting the form" /> : ""}
      <input
        type="text"
        className={`${f.input} ${errors.fullName && f.invalid}`}
        placeholder="Full Name"
        name={"fullName"}
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <p style={{ color: "red" }}>{errors.fullName}</p>}
      <input
        type="email"
        className={`${f.input} ${errors.email && f.invalid}`}
        placeholder="Email Address"
        name={"email"}
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <button className={f.button}>{"Get early access > "}</button>
    </form>
  );
}
