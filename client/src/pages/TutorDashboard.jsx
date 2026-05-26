import { useEffect, useState } from "react";
import axios from "axios";

function TutorDashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) return;

      const res = await axios.get(
        `https://teachbridge.onrender.com/api/bookings/${user._id}`
      );

      setBookings(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Tutor Dashboard</h1>

      <h2>Your Bookings</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        bookings.map((booking) => (
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
        ))
      )}
    </div>
  );
}

export default TutorDashboard;