const crypto = require("crypto");
const HttpStatus = require("http-status-codes");
function sha1Encode(data) {
  // To be implemented!
  const crypto = crypto.createHash("sha1").update(data).digest("hex");
  return crypto;
}

module.exports.digestAuth = (request, response, next) => {
  // To be implemented!
  const authorization = request.headers.authorization;
  const encoded = authorization.replace("Basic ", "");
  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  const authentication = decoded.split(":");
  const isValid =
    authentication[0] === "node" &&
    authentication[1] === sha1Encode("password");

  // si pas authentifiÃ©
  isValid ? next() : response.sendStatus(HttpStatus.UNAUTHORIZED);
};

//var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
//hash.update(password);
//var value = hash.digest('hex');
//return {
//  salt:salt,
//passwordHash:value
//};
