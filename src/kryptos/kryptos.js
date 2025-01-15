// Import @peculiar/webcrypto for Node.js support
import { Crypto } from '@peculiar/webcrypto'

// Define a cross-environment crypto object
export const kryptos = (() => {
  if (typeof globalThis.crypto !== 'undefined') {
    return globalThis.crypto // Use global crypto if available (browser or Node.js)
  } else {
    // Initialize and return @peculiar/webcrypto for Node.js
    const crypto = new Crypto()
    globalThis.crypto = crypto // Assign to globalThis for consistency
    return crypto
  }
})()

// Check if Web Crypto API is supported
export function isCryptoSupported() {
  if (!(kryptos && kryptos.subtle)) {
    throw new Error('Web Crypto API is not supported.')
  }
  return true
}
