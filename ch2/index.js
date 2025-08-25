// https://www.youtube.com/watch?v=f2EqECiTBL8&t=1046s

const fsPromises = require("fs").promises;
const path = require("path");

const readFilePath = path.join(__dirname, "files", "starter.txt");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(readFilePath, "utf8");
    console.log({ data });
    // await fsPromises.unlink(path.join(__dirname, "files", "stater.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you!"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log({ newData });
  } catch (error) {
    console.error(error);
  }
};

fileOps();

// fs.readFile(readFilePath, "utf8", (err, data) => {
//   if (err) throw err;
//   console.log({ data: data });
// });

// console.log("Hello");

// const writeFilePath = path.join(__dirname, "files", "reply.txt");

// fs.writeFile(writeFilePath, "Nice to meet you!", (err) => {
//   if (err) throw err;
//   console.log("Write complete!");

//   fs.appendFile(writeFilePath, "\n\n Yes it is.", (err) => {
//     if (err) throw err;
//     console.log("Append complete!");
//   });

//   fs.rename(
//     writeFilePath,
//     path.join(__dirname, "files", "newReply.txt"),
//     (err) => {
//       if (err) throw err;
//       console.log("Rename complete!");
//     }
//   );
// });

// const appendFilePath = path.join(__dirname, "files", "test.txt");

// fs.appendFile(appendFilePath, "Testing text", (err) => {
//   if (err) throw err;
//   console.log("Append complete!");
// });

// exit on uncaught errors
// process.on("uncaughtException", (err) => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });
