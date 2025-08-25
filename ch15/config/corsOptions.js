const allowedOrigins = require("../../ch11/config/allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // remove !origin after development
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS."));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
