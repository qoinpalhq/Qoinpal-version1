import React, { useState } from "react";

const Alert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose && onClose();
  };

  return (
    visible && (
      <div
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "1rem",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    )
  );
};

export default Alert;
