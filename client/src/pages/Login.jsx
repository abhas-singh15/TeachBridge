import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "https://teachbridge.onrender.com/api/auth/login",
      { email, password }
    );

    localStorage.setItem("token", res.data.token);

    if (res.data.role === "student") {
      navigate("/student-dashboard");
    } else {
      navigate("/tutor-dashboard");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>

    <Link to="/register">
    <button type="button">Register Now</button>
    </Link>
    </form>
  );
}

export default Login;