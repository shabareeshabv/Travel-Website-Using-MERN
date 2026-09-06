import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./LoginSignupStyle.css";

function LoginSignup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const apiUrl = "http://localhost:6001/api/users";

    if (isLogin) {
      try {
        const response = await fetch(`${apiUrl}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim(), password: password.trim() }),
        });

        const data = await response.json();

        if (response.ok) {
          login(data.token, data.email); // ✅ immediately update AuthContext
          alert("Login Successful!");
          navigate(location.state?.redirectTo || "/");
        } else {
          setError(data.message || "Login failed");
        }
      } catch (err) {
        setError("An error occurred during login. Check server or network.");
      }
    } else {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      try {
        const response = await fetch(`${apiUrl}/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email: email.trim(), password: password.trim() }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Signup successful. Please login.");
          setIsLogin(true);
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        } else {
          setError(data.message || "Signup failed");
        }
      } catch (err) {
        setError("An error occurred during signup. Check server or network.");
      }
    }
  };

  return (
    <div className="form-container">
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        )}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {!isLogin && (
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        )}
        {error && <p className="error-message">{error}</p>}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default LoginSignup;
