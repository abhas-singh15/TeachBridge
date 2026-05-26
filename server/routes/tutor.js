import express from "express";
import { searchTutors } from "../controllers/tutorController.js";

const router = express.Router();

router.get("/search", searchTutors);

export default router;