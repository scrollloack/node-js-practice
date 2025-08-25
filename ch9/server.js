// https://youtu.be/f2EqECiTBL8?t=10716

// MVC

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3500;

// Custom middleware logger
app.use(logger);
// Cross origin resource sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// serve static files
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/root"));
app.use("/employees", require("./routes/api/employees.js"));

app.all("*name", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
