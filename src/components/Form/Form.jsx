import f from "./form.module.css";
import useFormLogic from "./useFormLogic";

export default function Form() {
  const { handleChange, handleSubmit, errors, error, loading, formData } =
    useFormLogic();
  return (
    <form onSubmit={handleSubmit}>
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
      {error && <p>{error.message}</p>}
    </form>
  );
}
