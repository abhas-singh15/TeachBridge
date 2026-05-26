import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const { studentId, tutorId, slot } = req.body;

    const booking = await Booking.create({
      studentId,
      tutorId,
      slot
    });

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getTutorBookings = async (req, res) => {
  try {
    const { tutorId } = req.params;

    const bookings = await Booking.find({ tutorId });

    res.json(bookings);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};