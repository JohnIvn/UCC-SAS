import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import StaffSuccessToast from "./staffSuccess.jsx";
import { useNavigate } from "react-router-dom";

const StaffModal = ({ showModal, handleClose }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !password.trim()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/staff-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: name, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from backend:", data);

        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.role) {
          localStorage.setItem("role", data.role);
        }

        if (data.redirectTo) {
          console.log("Redirecting to:", data.redirectTo);
          navigate(data.redirectTo);
        } else {
          console.log("Redirecting to default location");
          navigate("/staff-page");
        }

        setShowToast(true);
        handleClose();
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred, please try again later.");
    }
  };

  const handleModalClose = () => {
    setName("");
    setPassword("");
    handleClose();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Staff Mode</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <div className="w-100">
            <p>
              Welcome! Staff <br />
              <span>Enter your credentials here.</span>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your Name with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Form.Text className="text-muted">
                  Enter your password securely.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onClick={togglePasswordVisibility}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTime">
                <Form.Label>Current Time</Form.Label>
                <Form.Control
                  type="text"
                  value={currentTime}
                  readOnly
                  disabled
                />
              </Form.Group>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!name.trim() || !password.trim()}
                >
                  Proceed as Staff
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      <StaffSuccessToast
        show={showToast}
        handleClose={() => setShowToast(false)}
      />
    </>
  );
};

export default StaffModal;
