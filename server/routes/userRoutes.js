const express = require("express");
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
} = require("../controllers/userController");
const router = express.Router();
const protect = require("../middleware/authMiddleare");

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);

module.exports = router;
