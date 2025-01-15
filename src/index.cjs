// CommonJS entry point for Node.js support

// Import @peculiar/webcrypto for Node.js crypto compatibility
const { Crypto } = require('@peculiar/webcrypto')

// Assign a global crypto object for Node.js
if (typeof global !== 'undefined' && typeof global.crypto === 'undefined') {
  global.crypto = new Crypto()
}

// Export the ES module entry point for CommonJS consumers
module.exports = require('./index.js')
