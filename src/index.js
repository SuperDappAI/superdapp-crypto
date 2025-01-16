// ES module entry point for Node.js and browser environments
import { webcrypto } from 'crypto'

// Check if running in Node.js and assign a global crypto object
if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = webcrypto // Use Node.js native Web Crypto API
}

export { isCryptoSupported } from './kryptos/kryptos.js'

export {
  deriveAccountPassword,
  deriveSessionKeyFromPassword,
  deriveSessionKeyFromMasterKey,
} from './kryptos/derive.js'

export {
  PROTECTOR_TYPES,
  SERVICES,
  SERVICE_MODES,
} from './kryptos/constants.js'

export {
  setupKeyStore,
  generateIdentityKeys,
  initKeyStores,
  unlockKeyStores,
  unlockAsymmetricKeyStores,
  lockAsymmetricKeyStores,
  lockKeyStores,
  lockKeyStore,
  verifyKeyProtector,
  getKeyStores,
  unlockPrivateKey,
  getPrivateKeyFromStore,
  getPublicKey,
  getPrivateKey,
} from './kryptos/serviceKeyStore.js'

export * from './kryptos/utils.js'
export * from './kryptos/algorithms.js'

export { hashString, hashAnything, fingerprint } from './kryptos/digest.js'

export {
  initProtocol,
  encryptProtocol,
  decryptProtocol,
  getProtocol,
} from './kryptos/protocol.js'

export {
  initStorage,
  encryptNewItemAssignment,
  encryptItemAssignment,
  encryptItem,
  decryptItemAssignment,
  decryptItem,
} from './kryptos/storage.js'

export {
  encryptFile,
  decryptFile,
  encryptFilePart,
  decryptFilePart,
  encryptFilePartWithKey,
  decryptFilePartWithKey,
} from './kryptos/files.js'

export {
  encryptChatMessage,
  encryptGroupChatMessage,
  decryptGroupChatKey,
  decryptChatMessage,
  decryptGroupChatMessage,
  encryptGroupChatKey,
} from './kryptos/chat.js'

export { encryptMessage, decryptMessage } from './kryptos/inbox.js'

export { signIt, hmacSignIt } from './kryptos/signer.js'

export { verifyIt, verifyPublicKeys } from './kryptos/verifier.js'

export {
  importPublicKeyPem,
  importPrivateKeyPem,
  wrapKey,
  generateEncryptionKeyPair,
  generateSigningKeyPair,
  generateSessionKey,
} from './kryptos/keys.js'

export { decryptRawSessionKey } from './kryptos/decrypter.js'

export {
  initIdentity,
  generateUserKeys,
  generateServiceKeys,
  generateUserKeys4K,
  generateUserKeys8K,
  signData,
  verifyData,
  signWithIdentity,
  verifyWithIdentity,
} from './kryptos/identity.js'

export {
  lockKeyContainer,
  unlockKeyContainer,
  removeProtector,
} from './kryptos/keyContainer.js'

export {
  encryptBip39Wallet,
  encryptWallet,
  decryptWallet,
  encryptBeneficiary,
  reEncryptBeneficiary,
  encryptWalletToBeneficiary,
  encryptItemKeyToBeneficiary,
  encryptNewInheritanceKey,
  reEncryptInheritanceKey,
  encryptBeneficiaryToInheritanceKey,
} from './kryptos/wallets.js'
