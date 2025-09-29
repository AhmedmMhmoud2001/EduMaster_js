const User = require("../models/User");

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // استبعد الباسورد
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error: error.message });
  }
};
// Get current user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ success: false, message: "❌ User not found" });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ Server error", error: error.message });
  }
};

// Update profile (name, email)
exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, email },
      { new: true }
    ).select("-password");

    res.status(200).json({ success: true, message: "✅ Profile updated", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ Server error", error: error.message });
  }
};

// Update study info (stage, semester, subject)
exports.updateStudyInfo = async (req, res) => {
  try {
    const { stage, semester, subject } = req.body;

    if (!stage || !semester || !subject) {
      return res.status(400).json({ success: false, message: "❌ All fields are required" });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { stage, semester, subject },
      { new: true }
    ).select("-password");

    res.status(200).json({ success: true, message: "✅ Study info updated", user });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ Server error", error: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.status(200).json({ success: true, message: "🗑️ User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ Server error", error: error.message });
  }
};
