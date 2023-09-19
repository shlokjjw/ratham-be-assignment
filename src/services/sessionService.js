const Session = require("../models/session");

// get available sessions
async function getAvailableSessions() {
  const sessions = await Session.find({ student: null });
  return sessions;
}

// book a session with the dean
async function bookSession(sessionId, studentId) {
  const session = await Session.findById(sessionId);
  if (!session) {
    throw new Error("Session not found");
  }

  if (session.student) {
    throw new Error("Session already booked");
  }

  session.student = studentId;
  await Session.save();
  return session;
}

// get pending sessions for the dean
async function getPendingSessions(deanId) {
  const sessions = await Session.find({ dean: deanId, student: { $ne: null } })
    .populate("student", "name")
    .exec();
  return sessions;
}

module.exports = {
  getAvailableSessions,
  bookSession,
  getPendingSessions,
};
