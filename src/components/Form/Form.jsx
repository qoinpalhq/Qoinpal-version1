import { useState } from "react";
import { useNavigate } from "react-router-dom";
import f from "./form.module.css";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    navigate("/congrats");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={f.input}
        placeholder="Full Name"
        name={formData.fullName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        className={f.input}
        placeholder="Email Address"
        name={formData.email}
        onChange={handleChange}
        required
      />
      <button className={f.button}>Get early access {">"}</button>
    </form>
  );
}
