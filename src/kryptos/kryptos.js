// Cross-environment Web Crypto API
import { webcrypto } from 'crypto'

export const kryptos = (() => {
  if (typeof window !== 'undefined' && window.crypto) {
    return window.crypto // Use browser's Web Crypto API
  } else if (typeof webcrypto !== 'undefined') {
    return webcrypto // Use Node.js native Web Crypto API
  } else {
    throw new Error('Web Crypto API is not supported in this environment.')
  }
})()

// Check if Web Crypto API is supported
export function isCryptoSupported() {
  if (!(kryptos && kryptos.subtle)) {
    throw new Error('Web Crypto API is not supported.')
  }
  return true
}
