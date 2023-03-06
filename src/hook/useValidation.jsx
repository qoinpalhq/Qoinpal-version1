const handleSubmit = (event) => {
  event.preventDefault();
  const newErrors = {};
  if (!username.trim()) {
    newErrors.username = "Username is required";
  }
  if (!email.trim()) {
    newErrors.email = "Email is required";
  }
  if (Object.keys(newErrors).length === 0) {
    addDocument({ username, email });
    setUsername("");
    setEmail("");
  } else {
    setErrors(newErrors);
  }
};
