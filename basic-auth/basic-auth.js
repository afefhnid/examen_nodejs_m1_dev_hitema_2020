const crypto = require("crypto");

function sha1Encode(data) {
  // To be implemented!
  const hash = crypto.createHash("sha256");
  const authorization = data;
  const encoded = authorization.replace("Basic ", "");
  const decoded = Buffer.from(encoded, "base64").toString("utf8");
  // 'user:paswword'
  const authentication = decoded.split(":");
  return authentication;
}

module.exports.digestAuth = (request, response, next) => {
  // To be implemented!
  const authorization = request.headers.authorization;
  const authentication = sha1Encode(authorization);

  const isValid =
    authentication[0] === "node" && authentication[1] === "password";

  // si pas authentifiÃ©
  isValid ? next() : response.sendStatus(401);
};

//var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
//hash.update(password);
//var value = hash.digest('hex');
//return {
//  salt:salt,
//passwordHash:value
//};
