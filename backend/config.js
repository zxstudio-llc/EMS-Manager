/** @format */

// config.js
//gen jwtsecret node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

module.exports = {
  jwtSecret: "1e673fa11d66455b8e17251245f7cbddc7cc777d9464dc28331c49a2b8bedd06",
  jwtExpiration: "1d", // Por ejemplo, expiración en 1 día
};
