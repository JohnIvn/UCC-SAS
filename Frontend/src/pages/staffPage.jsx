import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToastContainer from "react-bootstrap/ToastContainer";
import AttendanceToastNotif from "../components/attendanceToast.jsx";
import ChangeModal from "../components/changeModal.jsx";
import ShowProfile from "../components/showProfileModal.jsx";
import SignUpModal from "../components/signUpModal.jsx";
import UCCLogo from "../assets/uccFavicon.png";
import api from "../api.js";

const StaffPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("profile");
  const [modalContent, setModalContent] = useState("");
  const [userName, setUserName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [myAccount, setMyAccount] = useState({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get("/profile");
        setFormData(response.data);
        setMyAccount(response.data);
        if (response.data.name) {
          setUserName(response.data.name);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
        alert("Failed to load user profile. Please try again later.");
      }
    };

    fetchUserProfile();
  }, []);

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

      setSubjects((prevSubjects) =>
        prevSubjects.map((subject, index) =>
          index + 1 === subjectId
            ? { ...subject, attendance: "Present" }
            : subject
        )
      );

      setToast({
        show: true,
        message: `Attendance marked for subject ${subjectId}`,
        variant: "success",
      });
    } catch (error) {
      console.error("Error marking attendance:", error);
      setToast({
        show: true,
        message: "Failed to mark attendance. Please try again.",
        variant: "danger",
      });
    }
  };

  const handleSignUp = () => {
    setShowModal(true);
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
            <h1 className="fw-bold">Admin Profile</h1>
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

        <button
          className="btn btn-dark-green btn-lg fw-bold px-5 py-3 mt-4 d-flex align-items-center button-hover"
          onClick={handleSignUp}
        >
          <i className="bi bi-person-plus me-3 fs-4"></i> Sign Up
        </button>
      </div>

      <AttendanceToastNotif
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        variant={toast.variant}
      />

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

      {showModal && (
        <SignUpModal
          showModal={showModal}
          handleClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default StaffPage;
