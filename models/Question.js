const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  type: { type: String, enum: ["mcq", "essay", "truefalse"], required: true }, // نوع السؤال
  options: [String], // لو كان MCQ
  correctAnswer: { type: String }, // الإجابة الصحيحة
  stage: { type: String, required: true },
  semester: { type: String, required: true },
  subject: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Question", questionSchema);
