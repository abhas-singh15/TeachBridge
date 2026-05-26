import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tutorRoutes from "./routes/tutor.js";
import bookingRoutes from "./routes/booking.js";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/tutors", tutorRoutes);

app.get("/", (req, res) => {
  res.send("TeachBridge API running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});