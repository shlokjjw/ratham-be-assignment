const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/constants");

// Middleware to verify the JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid authentication token" });
  }
}

module.exports = {
  verifyToken,
};
