const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String }, // أيقونة أو صورة للإشعار
  stage: { type: String, required: true },
  semester: { type: String, required: true },
  subject: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", notificationSchema);
