const Video = require("../models/Video");
const Summary = require("../models/Summary");
const Exam = require("../models/Exam");
const Notification = require("../models/Notification");
const Question = require("../models/Question");
const Result = require("../models/Result");

exports.getDashboard = async (req, res) => {
  try {
    const { stage, semester, subject, _id } = req.user;

    // 🔔 Notifications (آخر 5 فقط)
    const notifications = await Notification.find({ stage, semester, subject })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title image createdAt");

    // 🎥 عدد الفيديوهات
    const totalVideos = await Video.countDocuments({ stage, semester, subject });

    // 📚 عدد الملخصات
    const totalSummaries = await Summary.countDocuments({ stage, semester, subject });

    // 📝 عدد الامتحانات
    const totalExams = await Exam.countDocuments({ stage, semester, subject });

    // ❓ عدد الأسئلة في بنك الأسئلة
    const totalQuestions = await Question.countDocuments({ stage, semester, subject });

    // ⚡ إحصائيات الطالب (من الـ Results)
    const userExams = await Result.countDocuments({ user: _id });
    const avgScoreData = await Result.aggregate([
      { $match: { user: _id } },
      { $group: { _id: null, avgScore: { $avg: "$score" } } }
    ]);
    const avgScore = avgScoreData[0]?.avgScore || 0;

    res.status(200).json({
      success: true,
      dashboard: {
        notifications,
        counts: {
          videos: totalVideos,
          summaries: totalSummaries,
          exams: totalExams,
          questions: totalQuestions
        },
        stats: {
          userExams,
          avgScore,
        },
      },
    });
  } catch (error) {
    console.error("❌ Dashboard Error:", error.message);
    res.status(500).json({ success: false, message: "❌ Server error", error: error.message });
  }
};
