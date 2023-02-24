import { useState } from "react";
import { Link } from "react-router-dom";
import f from "./form.module.css";

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <form>
      <input
        type="text"
        className={f.input}
        placeholder="Full Name"
        name={formData.fullName}
        onChange={handleChange}
      />
      <input
        type="text"
        className={f.input}
        placeholder="Email Address"
        name={formData.email}
        onChange={handleChange}
      />
      <button className={f.button}>
        <Link to="/congrats">Get early access {">"}</Link>
      </button>
    </form>
  );
}
