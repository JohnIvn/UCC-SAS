import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SignUpSuccess from "./signUpSuccess.jsx";
import { useNavigate } from "react-router-dom";

const SignUpModal = ({ showModal, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleMiddleNameChange = (e) => setMiddleName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName,
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from backend:", data);

        setShowToast(true);
        handleClose();
      } else {
        const errorData = await response.json();
        if (errorData.error === "Email already taken") {
          setError("This email is already in use. Please choose another.");
        } else {
          setError("Failed to create an account. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Failed to sign up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setError("");
    handleClose();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <div className="w-100">
            <p>
              Welcome! <br />
              <span>Enter your details to create an account.</span>
            </p>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignUp();
              }}
            >
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMiddleName">
                <Form.Label>Middle Name (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Middle Name"
                  value={middleName}
                  onChange={handleMiddleNameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
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

              <Form.Group className="mb-3" controlId="formTime">
                <Form.Label>Current Time</Form.Label>
                <Form.Control
                  type="text"
                  value={currentTime}
                  readOnly
                  disabled
                />
              </Form.Group>

              {error && <div className="alert alert-danger">{error}</div>}

              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={
                    loading ||
                    !firstName.trim() ||
                    !lastName.trim() ||
                    !email.trim() ||
                    !password.trim()
                  }
                >
                  {loading ? "Loading..." : "Sign Up"}
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      <SignUpSuccess show={showToast} handleClose={() => setShowToast(false)} />
    </>
  );
};

export default SignUpModal;
