const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connect = require("./config/db");
const { PORT } = require("./utils/constants");
const authRoutes = require("./routes/v1/authRoutes");
const sessionRoutes = require("./routes/v1/sessionRoutes");

const app = express();

/* MIDDLEWARE */
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ROUTES */
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/session", sessionRoutes);

app.listen(PORT, () => {
  connect();
  console.log(`server listening on port ${PORT}`);
});
