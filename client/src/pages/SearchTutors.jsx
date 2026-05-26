import { useState, useEffect } from "react";
import axios from "axios";

function SearchTutors() {
  const [query, setQuery] = useState("");
  const [tutors, setTutors] = useState([]);

  const bookSession = async (tutorId) => {
  await axios.post(
    "http://localhost:8000/api/bookings",
    {
      studentId: "demo-student",
      tutorId,
      slot: "10:00 AM"
    }
  );

  alert("Session booked successfully!");
};

  const fetchTutors = async (search = "") => {
    const res = await axios.get(
      `http://localhost:8000/api/tutors/search?query=${search}`
    );

    setTutors(res.data);
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  const handleSearch = () => {
    fetchTutors(query);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Find Tutors</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Search by subject or tutor"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "10px 16px",
            cursor: "pointer"
          }}
        >
          Search
        </button>

        
      </div>

      <div
        style={{
          display: "grid",
          gap: "20px"
        }}
      >
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "10px"
            }}
          >
            <h3>{tutor.name}</h3>
            <p>
              <strong>Subjects:</strong>{" "}
              {tutor.subjects.join(", ")}
            </p>
            <button
                onClick={() => bookSession(tutor._id)}
                style={{
                    padding: "8px 14px",
                    marginTop: "10px",
                    cursor: "pointer"
                }}
                >
                Book Session
                </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchTutors;