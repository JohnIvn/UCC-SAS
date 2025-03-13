import LandingPage from "./pages/landingPage.jsx";
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
    return <Navigate to="/signin" />;
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
          element={token ? <Navigate to="/landing-page" /> : <LandingPage />}
        />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
