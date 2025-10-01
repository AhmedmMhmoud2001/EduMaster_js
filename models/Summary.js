const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  title: { type: String, required: true },
  fileUrl: { type: String, required: true }, // رابط PDF من Google Drive أو Cloud
  stage: { type: String, required: true },
  semester: { type: String, required: true },
  subject: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Summary", summarySchema);
