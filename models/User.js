const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    stage: { type: String },
    semester: { type: String },
    subject: { type: String },
    role: { type: String, enum: ["student", "teacher"], default: "student" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
