import { useEffect, useState } from "react";
import axios from "axios";

function TutorDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const tutorId = localStorage.getItem("userId");

    const res = await axios.get(
      `http://localhost:8000/api/bookings/${tutorId}`
    );

    setBookings(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Tutor Dashboard</h1>

      <h2>Your Bookings</h2>

      {bookings.map((booking) => (
        <div
          key={booking._id}
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "15px",
            borderRadius: "10px"
          }}
        >
          <p>
            <strong>Student:</strong> {booking.studentId}
          </p>

          <p>
            <strong>Slot:</strong> {booking.slot}
          </p>

          <p>
            <strong>Status:</strong> {booking.status}
          </p>
        </div>
      ))}
    </div>
  );
}

export default TutorDashboard;