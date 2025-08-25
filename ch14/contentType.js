const contentTypes = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".txt": "text/plain",
};

function getContentType(extension) {
  return contentTypes[extension] || "text/html";
}

module.exports = getContentType;
