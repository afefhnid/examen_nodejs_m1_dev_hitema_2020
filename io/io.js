const fs = require("fs").promises;
module.exports.decodeHexFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      const buf = Buffer.from(data, "ascii");
      var hexvalue = buf.toString("hex");

      console.log();

      resolve(hexvalue);
    });
  });
};
