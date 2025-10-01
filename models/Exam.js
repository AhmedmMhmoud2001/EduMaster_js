const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  stage: { type: String, required: true },
  semester: { type: String, required: true },
  subject: { type: String, required: true },
  duration: { type: Number, default: 60 }, // مدة الامتحان بالدقائق
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Exam", examSchema);
