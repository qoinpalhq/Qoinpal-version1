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
  const { addDocument, error, loading } = useFirestore("new");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function validate() {
    console.log("sent");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    await addDocument(formData);
    console.log("added");
    setFormData({ fullName: "", email: "" });

    console.log(error);
    if (!error) {
      console.log("no error");
      return navigate("/congrats");
    }
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
