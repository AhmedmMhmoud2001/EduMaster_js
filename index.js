const app = require("./app");

module.exports = app;

// // للتشغيل المحلي فقط
// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => {
//     console.log(`🚀 Server running locally on port ${PORT}`);
//   });
// }