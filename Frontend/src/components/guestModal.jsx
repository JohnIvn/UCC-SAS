import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import GuestSuccessToast from "./guestSucces.jsx";

const GuestModal = ({ showModal, handleClose }) => {
  const [name, setName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    try {
      const response = await fetch("http://192.168.1.7:3000/add-guest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        console.log("Guest name submitted successfully");
        setShowToast(true);
        handleClose();
      } else {
        console.error("Error submitting guest name");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleModalClose = () => {
    setName("");
    handleClose();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleModalClose} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>Guest Mode</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center align-items-center">
          <div className="w-100">
            <p>
              Welcome! Guest <br />
              <span>Enter your credentials here.</span>
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
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

              <Form.Group className="mb-3" controlId="formBasicTime">
                <Form.Label>Current Time</Form.Label>
                <Form.Control
                  type="text"
                  value={currentTime}
                  readOnly
                  disabled
                />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" disabled={!name.trim()}>
                  Proceed as Guest
                </Button>
              </Modal.Footer>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      <GuestSuccessToast
        show={showToast}
        handleClose={() => setShowToast(false)}
      />
    </>
  );
};

export default GuestModal;
