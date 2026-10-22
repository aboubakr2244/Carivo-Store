const express = require("express");
const { profileUser, updateProfile } = require("../Controllers/userController");
const { authMiddleware } = require("../Middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", authMiddleware, profileUser);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router;
