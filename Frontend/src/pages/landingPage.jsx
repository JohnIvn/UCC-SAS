import React, { useState } from "react";
import "../CSS/LandingPageDesign.css";
import UCCLogo from "../assets/uccFavicon.png";
import GuestModal from "../components/guestModal.jsx";

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("home");

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="bg-dark text-white vh-100 d-flex flex-column">
      <nav className="navbar navbar-dark bg-dark w-100 p-3">
        <div className="container d-flex justify-content-between">
          <span className="navbar-brand h1 d-flex align-items-center">
            <img
              src={UCCLogo}
              alt="UCC Logo"
              className="me-2"
              style={{ height: "40px" }}
            />
            UCC • Student Attendance System
          </span>
          <div>
            <a
              href="#"
              className={`text-secondary text-decoration-none mx-3 fw-bold border-white pb-1 ${
                content === "home" ? "active text-white" : ""
              }`}
              onClick={() => handleContentChange("home")}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-secondary text-decoration-none mx-3 ${
                content === "contact" ? "active text-white" : ""
              }`}
              onClick={() => handleContentChange("contact")}
            >
              Contact
            </a>
            <a
              href="#"
              className={`text-secondary text-decoration-none mx-3 ${
                content === "privacy" ? "active text-white" : ""
              }`}
              onClick={() => handleContentChange("privacy")}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </nav>

      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        {content === "home" && (
          <>
            <h1 className="fw-bold">Welcome</h1>
            <p className="lead">Who's going to use this website?</p>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              <button
                className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover"
                onClick={handleShow}
              >
                <i className="bi bi-person-slash me-3 fs-4 icon-hover"></i>{" "}
                Guest
              </button>
              <button className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover">
                <i className="bi bi-person me-3 fs-4 icon-hover"></i> Student
              </button>
              <button className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover">
                <i className="bi bi-person-lock me-3 fs-4 icon-hover"></i> Admin
              </button>
            </div>
          </>
        )}
        {content === "contact" && (
          <>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to reach out to us!</p>
            {/* Add your contact information or form here */}
          </>
        )}
        {content === "privacy" && (
          <>
            <h1>Privacy Policy</h1>
            <p>
              Your privacy is important to us. Here's how we handle your data...
            </p>
            {/* Add your privacy policy details here */}
          </>
        )}
      </div>

      <GuestModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default LandingPage;
