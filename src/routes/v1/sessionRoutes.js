const express = require("express");
const sessionController = require("../../controllers/sessionController");
const authMiddleware = require("../../middleware/authMiddleware");

const router = express.Router();

// Define the get available sessions route
router.get("/sessions/available", sessionController.getAvailableSessions);

// Define the book session route
router.post(
  "/sessions/book",
  authMiddleware.verifyToken,
  sessionController.bookSession
);

// Define the get pending sessions route
router.get(
  "/sessions/pending",
  authMiddleware.verifyToken,
  sessionController.getPendingSessions
);

module.exports = router;
