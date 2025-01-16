// CommonJS entry point for Node.js support
const { webcrypto } = require('crypto')

// Assign a global crypto object for Node.js
if (typeof global.crypto === 'undefined') {
  global.crypto = webcrypto
}

// Export the ES module entry point for CommonJS consumers
module.exports = require('./index.js')
