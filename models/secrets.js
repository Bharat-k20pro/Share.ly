const cryptoJs = require('crypto-js');
const on = cryptoJs.SHA256('process.env.HIDDEN_KEY').toString();
module.exports = on;