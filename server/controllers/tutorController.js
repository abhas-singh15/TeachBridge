import User from "../models/User.js";

export const searchTutors = async (req, res) => {
  try {
    const { query } = req.query;

    let tutors;

    if (!query) {
      tutors = await User.find({
        role: "tutor"
      }).select("-password");
    } else {
      tutors = await User.find({
        role: "tutor",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { subjects: { $regex: query, $options: "i" } }
        ]
      }).select("-password");
    }

    res.json(tutors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};