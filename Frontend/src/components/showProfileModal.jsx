import React from "react";
import { Modal, Button } from "react-bootstrap";

const ShowProfile = ({ showModal, handleClose, modalContent, userProfile }) => {
  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {modalContent === "viewProfile" && "Student Profile"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {modalContent === "viewProfile" && userProfile && (
          <div>
            <p>
              <strong>Name:</strong> {userProfile.name}
            </p>
            <p>
              <strong>Email:</strong> {userProfile.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {userProfile.phoneNumber}
            </p>
            <p>
              <strong>Course:</strong> {userProfile.course}
            </p>
            <p>
              <strong>Year:</strong> {userProfile.year}
            </p>
            <p>
              <strong>Section:</strong> {userProfile.section}
            </p>
            <p>
              <strong>Student Number:</strong> {userProfile.studentNumber}
            </p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowProfile;
