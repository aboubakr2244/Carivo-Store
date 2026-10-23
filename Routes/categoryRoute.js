const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../Controllers/categoryController");
const { authMiddleware } = require("../Middlewares/authMiddleware");
const { roleMiddleware } = require("../Middlewares/roleMiddleware");

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", authMiddleware, roleMiddleware("admin"), createCategory);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateCategory);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteCategory);

module.exports = router;
