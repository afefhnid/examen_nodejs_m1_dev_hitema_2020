const fs = require("fs").promises;
module.exports.decodeHexFileContent = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(err);
      }
      const buf = Buffer.from(data, "hex");
      var res = buf.toString("utf8");

      console.log();

      resolve(res);
    });
  });
};
