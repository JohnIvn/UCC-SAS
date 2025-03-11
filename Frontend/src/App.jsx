import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  // Handles input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Data before sending:", formData); // Debugging

    try {
      const response = await axios.post(
        "http://localhost:3000/signin",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Save token and role in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      setMessage("Sign in successful!");
      console.log("Response from backend:", response.data);

      // Redirect based on role
      window.location.href = response.data.redirectTo;
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Sign in failed. Please try again."
      );
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
