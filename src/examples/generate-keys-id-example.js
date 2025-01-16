import {
  generateId,
  generateEncryptionKeyPair,
  generateSigningKeyPair,
  RSASSA_PKCS1_V1_5_ALGO,
  RSA_OAEP_ALGO,
} from 'superdapp-crypto'

;(async () => {
  try {
    console.log('Generate Keys and ID Example\n')

    // Generate a User ID
    const userId = generateId(32)
    console.log('Generated User ID:', userId)

    // Generate Encryption Key Pair (Algorithm: RSA-OAEP with 2048-bit key size)
    const encryptionKeys = await generateEncryptionKeyPair(RSA_OAEP_ALGO)
    console.log('Encryption Public Key:', encryptionKeys.publicKey)

    // Generate Signing Key Pair (Algorithm: ECDSA with P-256 curve)
    const signingKeys = await generateSigningKeyPair(RSASSA_PKCS1_V1_5_ALGO)
    console.log('Signing Public Key:', signingKeys.publicKey)

    console.log('\nGenerate Keys and ID Example Completed Successfully!')
  } catch (error) {
    console.error('Error in Generate Keys and ID Example:', error)
  }
})()
