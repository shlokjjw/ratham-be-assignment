const authService = require("../services/authService");

async function studentLogin(req, res, next) {
  try {
    const { universityId, password } = req.body;
    const token = await authService.studentLogin(universityId, password);
    res.json({ token });
  } catch (err) {
    next(error);
  }
}

async function deanLogin(req, res, next) {
  try {
    const { universityId, password } = req.body;
    const token = await authService.deanLogin(universityId, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  studentLogin,
  deanLogin,
};
