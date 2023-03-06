import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFirestore from "/src/hook/useFirestore";

export default function FormLogic() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { addDocument, error, loading } = useFirestore("waitlist");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.fullName, formData.email);
    // const newErrors = {};
    // if (!formData.fullName.trim()) {
    //   newErrors.fullName = "Full Name is required";
    // }
    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    // }

    // if (Object.keys(newErrors).length === 0) {
    //   addDocument(formData);
    //   setFormData({});
    // } else {
    //   setErrors(newErrors);
    // }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    error,
    loading,
  };
}
