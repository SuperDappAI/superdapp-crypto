// Node.js environment setup for AVA tests

import { Crypto } from '@peculiar/webcrypto'

// Initialize the global crypto object for Node.js
if (typeof global !== 'undefined' && typeof global.crypto === 'undefined') {
  global.crypto = new Crypto()
}
