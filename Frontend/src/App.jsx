import LandingPage from "./pages/landingPage.jsx";
import StudentPage from "./components/studentPage.jsx";
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
            <ProtectedRoute>
              <StudentPage />
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
