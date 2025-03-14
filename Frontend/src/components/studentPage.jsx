import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/landingPageDesign.css";
import UCCLogo from "../assets/uccFavicon.png";
import ChangeModal from "./changeModal.jsx";
import ShowProfile from "./showProfileModal.jsx";
import api from "../api.js";

const StudentPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("profile");
  const [modalContent, setModalContent] = useState("");
  const [userName, setUserName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [myAccount, setMyAccount] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/profile");
        setFormData(response.data);
        setMyAccount(response.data);

        if (response.data.name) {
          setUserName(response.data.name);
        }

        console.log("Fetched user profile:", response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        alert("Failed to load user profile. Please try again later.");
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    if (content === "schedule" && formData.studentNumber) {
      const fetchSubjects = async () => {
        try {
          const response = await api.get(`/subjects/${formData.studentNumber}`);
          console.log("Fetched subjects:", response.data);

          if (Array.isArray(response.data)) {
            setSubjects(response.data);
          } else if (
            response.data.subjects &&
            Array.isArray(response.data.subjects)
          ) {
            setSubjects(response.data.subjects);
          } else {
            setSubjects([]);
          }
        } catch (error) {
          console.error("Error fetching subjects:", error);
          setSubjects([]);
        }
      };

      fetchSubjects();
    }
  }, [content, formData.studentNumber]);

  const handleClose = () => setShowModal(false);
  const handleShow = (modalType) => {
    setModalContent(modalType);
    setShowModal(true);
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
    window.location.reload();
  };

  const handleAttend = async (subjectId) => {
    try {
      await api.post(`/attendance/${formData.studentNumber}/${subjectId}`);
      alert(`Attendance marked for subject ${subjectId}`);
    } catch (error) {
      console.error("Error marking attendance:", error);
      alert("Failed to mark attendance. Please try again.");
    }
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
                content === "profile" ? "active text-white" : ""
              }`}
              onClick={() => handleContentChange("profile")}
            >
              Profile
            </a>
            <a
              href="#"
              className={`text-secondary text-decoration-none mx-3 ${
                content === "schedule" ? "active text-white" : ""
              }`}
              onClick={() => handleContentChange("schedule")}
            >
              Schedule
            </a>
            <a
              href="#"
              className={`text-secondary text-decoration-none mx-3 ${
                content === "grades" ? "active text-white" : ""
              }`}
              onClick={() => handleContentChange("grades")}
            >
              Grades
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
            <button
              className="btn btn-danger ms-3 fw-bold"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
        {content === "profile" && (
          <>
            <h1 className="fw-bold">Student Profile</h1>
            {userName && (
              <h3 className="text-secondary">Welcome, {userName}!</h3>
            )}
            <p className="lead">Manage your profile details</p>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
              <button
                className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover"
                onClick={() => handleShow("ShowProfile")}
              >
                <i className="bi bi-pencil me-3 fs-4 icon-hover"></i> Show
                Profile
              </button>
              <button
                className="btn btn-dark-green btn-lg fw-bold px-5 py-3 d-flex align-items-center button-hover"
                onClick={() => handleShow("changePassword")}
              >
                <i className="bi bi-lock me-3 fs-4 icon-hover"></i> Change
                Password
              </button>
            </div>
          </>
        )}

        {content === "schedule" && (
          <>
            <h1>Class Schedule</h1>
            <p>View your upcoming classes and events.</p>
            <ul className="list-group mt-3 w-75">
              {subjects.length > 0 ? (
                subjects.map((subjectObj, index) => (
                  <li
                    key={index}
                    className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <strong>Subject {index + 1}:</strong>{" "}
                      {subjectObj.subject || "Not assigned yet"}
                      <br />
                      <strong>Attendance:</strong>{" "}
                      {subjectObj.attendance || "N/A"}
                    </div>
                    <button
                      className="btn btn-success fw-bold px-4 py-2"
                      onClick={() => handleAttend(index + 1)}
                    >
                      Attend
                    </button>
                  </li>
                ))
              ) : (
                <li className="list-group-item bg-dark text-white">
                  No subjects available.
                </li>
              )}
            </ul>
          </>
        )}
      </div>

      {modalContent === "ShowProfile" && (
        <ShowProfile
          showModal={showModal}
          handleClose={handleClose}
          modalContent="viewProfile"
          userProfile={formData}
        />
      )}
      {modalContent === "changePassword" && (
        <ChangeModal
          showModal={showModal}
          handleClose={handleClose}
          userEmail={formData.email}
        />
      )}
    </div>
  );
};

export default StudentPage;
