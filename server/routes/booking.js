import express from "express";
import {
  createBooking,
  getTutorBookings
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:tutorId", getTutorBookings);

export default router;