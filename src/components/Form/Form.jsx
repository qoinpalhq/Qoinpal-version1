import f from "./form.module.css";
import useFormLogic from "./useFormLogic";

export default function Form() {
  const { handleChange, handleSubmit, errors, error, loading, formData } =
    useFormLogic();
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={`${f.input} ${errors.fullname && f.invalid}`}
        placeholder="Full Name"
        name={formData.fullName}
        onChange={handleChange}
        required
      />
      {errors.fullname && <div>{errors.fullname}</div>}
      <input
        type="email"
        className={`${f.input} ${errors.email && f.invalid}`}
        placeholder="Email Address"
        name={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <div>{errors.email}</div>}
      <button className={f.button}>
        {loading ? "Processing..." : "Get early access > "}
      </button>
      {error && <div>Error</div>}
    </form>
  );
}
