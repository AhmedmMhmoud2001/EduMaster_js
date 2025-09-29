const express = require("express");
const {
  getProfile,
  updateProfile,
  updateStudyInfo,
  deleteUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// ✨ CRUD Routes
router.get("/me", authMiddleware, getProfile);
router.put("/profile", authMiddleware, updateProfile);
router.put("/study-info", authMiddleware, updateStudyInfo);
router.delete("/delete", authMiddleware, deleteUser);

module.exports = router;
