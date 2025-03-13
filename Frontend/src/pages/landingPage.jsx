import React from "react";
import "../CSS/LandingPageDesign.css";

const LandingPage = () => {
  return (
    <div className="bg-dark text-white vh-100 d-flex flex-column">
      <nav className="navbar navbar-dark bg-dark w-100 p-3">
        <div className="container d-flex justify-content-between">
          <span className="navbar-brand h1">
            UCC • Student Attendance System
          </span>
          <div>
            <a
              href="#"
              className="text-white text-decoration-none mx-3 fw-bold border-bottom border-white pb-1"
            >
              Home
            </a>
            <a href="#" className="text-secondary text-decoration-none mx-3">
              Features
            </a>
            <a href="#" className="text-secondary text-decoration-none mx-3">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="fw-bold">Welcome</h1>
        <p className="lead">Who's going to use this website?</p>
        <div className="d-flex gap-4 mt-3">
          <button className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover">
            <i className="bi bi-person-slash me-3 fs-4 icon-hover"></i> Guest
          </button>
          <button className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover">
            <i className="bi bi-person me-3 fs-4 icon-hover"></i> Student
          </button>
          <button className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover">
            <i className="bi bi-person-lock me-3 fs-4 icon-hover"></i> Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
