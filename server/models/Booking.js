import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true
  },
  tutorId: {
    type: String,
    required: true
  },
  slot: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "booked"
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;