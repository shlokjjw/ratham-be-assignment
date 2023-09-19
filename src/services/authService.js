const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../utils/constants");
const Student = require("../models/student");
const Dean = require("../models/dean");

function generateToken(userId, role) {
  const payload = { userId, role };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, JWT_SECRET, options);
}

async function studentLogin(universityId, password) {
  try {
    const student = await Student.findOne({ universityId, password });
    if (!student) {
      throw new Error("Invalid student credentials");
    }

    const token = generateToken(student._id, "student");
    return token;
  } catch (err) {
    throw new Error(console.log(`encountered an error ${err}`));
  }
}

async function deanLogin(universityId, password) {
  const dean = await Dean.findOne({ universityId, password });
  if (!dean) {
    throw new Error("Invalid dean credentials");
  }

  const token = generateToken(dean._id, "dean");
  return token;
}

module.exports = {
  studentLogin,
  deanLogin,
};
