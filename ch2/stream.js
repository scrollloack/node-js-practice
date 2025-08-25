const fs = require("fs");
const path = require("path");

const readFilePath = path.join(__dirname, "files", "lorem.txt");

const rs = fs.createReadStream(readFilePath, { encoding: "utf8" });

const writeFilePath = path.join(__dirname, "files", "new-lorem.txt");

const ws = fs.createWriteStream(writeFilePath);

// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

rs.pipe(ws);
