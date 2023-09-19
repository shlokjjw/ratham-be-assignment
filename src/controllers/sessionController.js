const sessionService = require("../services/sessionService");

// Handle get available sessions request
async function getAvailableSessions(req, res, next) {
  try {
    const sessions = await sessionService.getAvailableSessions();
    res.json({ sessions });
  } catch (error) {
    next(error);
  }
}

// Handle book session request
async function bookSession(req, res, next) {
  try {
    const { sessionId } = req.body;
    const studentId = req.user.userId; // Assuming authenticated user information is stored in req.user
    const session = await sessionService.bookSession(sessionId, studentId);
    res.json({ session });
  } catch (error) {
    next(error);
  }
}

// Handle get pending sessions request
async function getPendingSessions(req, res, next) {
  try {
    const deanId = req.user.userId; // Assuming authenticated user information is stored in req.user
    const sessions = await sessionService.getPendingSessions(deanId);
    res.json({ sessions });
  } catch (error) {
    next(error);
  }
}

// Export the controller functions
module.exports = {
  getAvailableSessions,
  bookSession,
  getPendingSessions,
};
