import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";

const ToastMessage = ({ show, handleClose }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    if (show) {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }
  }, [show]);

  return (
    <Toast
      show={show}
      onClose={handleClose}
      autohide
      delay={3000}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#6c757d",
        color: "#ffffff",
        borderRadius: "5px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Guest Mode</strong>
        <small>Just Now {time}</small>
      </Toast.Header>
      <Toast.Body>Guest attendance record successfully!</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
