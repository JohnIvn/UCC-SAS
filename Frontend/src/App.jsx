import LandingPage from "./pages/landingPage.jsx";
import StudentPage from "./components/studentPage.jsx";
import StaffPage from "./pages/staffPage.jsx"; // Assuming you have a StaffPage component
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (requiredRole && role !== requiredRole) {
    // Redirect to homepage if role doesn't match for student, or redirect teacher to their page
    if (role === "Teacher") {
      return <Navigate to="/staff-page" />;
    }
    return <Navigate to="/homepage" />;
  }

  return children;
};

export default function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/homepage" /> : <LandingPage />}
        />
        <Route
          path="/landing-page"
          element={token ? <Navigate to="/homepage" /> : <LandingPage />}
        />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute requiredRole="Student">
              <StudentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff-page"
          element={
            <ProtectedRoute requiredRole="Teacher">
              <StaffPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={token ? <Navigate to="/homepage" /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}
