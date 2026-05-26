import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
    subjects: ""
    });

   const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        ...form,
        subjects:
        form.role === "tutor"
            ? form.subjects.split(",").map(s => s.trim())
            : []
    };

    await axios.post(
        "http://localhost:8000/api/auth/register",
        payload
    );

    navigate("/");
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
      >
        <option value="student">Student</option>
        <option value="tutor">Tutor</option>
      </select>
      {form.role === "tutor" && (
    <input
        placeholder="Subjects (',' separated)"
        onChange={(e) =>
        setForm({
            ...form,
            subjects: e.target.value
        })
        }
    />
    )}

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;