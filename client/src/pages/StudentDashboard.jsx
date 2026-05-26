import { useNavigate } from "react-router-dom";

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "30px"
      }}
    >
      <h1 style={{ margin: 0 }}>Student Dashboard</h1>

      <button
        onClick={() => navigate("/search")}
        style={{
          padding: "10px 18px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "8px"
        }}
      >
        Search Tutors
      </button>
    </div>
  );
}

export default StudentDashboard;