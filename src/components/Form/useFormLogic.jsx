import { useNavigate } from "react-router-dom";
import { db } from "/src/db/firebase";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { useState } from "react";
import useGlobalContext from "/src/appContext";

export default function useFormLogic() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });
  const navigate = useNavigate();
  const { setErrors, setError, setLoading } = useGlobalContext();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (!window.navigator.onLine) {
      alert("Check internet connection");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      // const querySnapshot = await getDocs(
      //   query(
      //     collection(db, "waitlist"),
      //     where("email", "==", formData.email.trim())
      //   )
      // );
      // if (!querySnapshot.empty) {
      //   setError("Email already exists in the waitlist");
      //   alert("Email already exists in the waitlist");

      //   setLoading(false);
      //   return;
      // }
      await addDoc(collection(db, "waitlist"), formData);
      setError(null);
      navigate("/congrats");
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleChange,
    formData,
    handleSubmit,
  };
}
