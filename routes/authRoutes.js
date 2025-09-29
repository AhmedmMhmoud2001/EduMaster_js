const express = require("express");
const { registerUser, loginUser ,signOut} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/signout", signOut);

module.exports = router;
