// Node.js environment setup for AVA tests

import { webcrypto } from 'crypto'

// Initialize the global crypto object for Node.js
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = webcrypto
}
