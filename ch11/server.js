// https://youtu.be/f2EqECiTBL8?t=14986

// JWT - JSON web tokens - a form of user identification, issued after the initial user authorization takes place, rest api issues access token(short time) and refresh token(long time)
// avoid xss and csrf
// recommend for FE client to store access token in memory

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials.js");
const PORT = process.env.PORT || 3500;

// Custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross origin resource sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// serve static files
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.use("/", require("./routes/root"));
app.use("/register", require("./routes/register.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/refresh", require("./routes/refresh.js"));
app.use("/logout", require("./routes/logout.js"));

// app.use(verifyJWT);
app.use("/employees", [verifyJWT, require("./routes/api/employees.js")]);

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
