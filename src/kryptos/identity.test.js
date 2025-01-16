import test from 'ava'
import {
  createIdentity,
  verifyIdentity,
  generateUserKeys4K,
  generateUserKeys8K,
} from './identity.js'
import { generateSigningKeyPair, exportKey } from './keys.js'
import * as algorithms from './algorithms.js'
import { generateId, randomString } from './utils.js'

test('Test create signed Identity (createIdentity)', async (t) => {
  const keyPair = await generateSigningKeyPair(algorithms.ECDSA_ALGO)
  const id = generateId(32)

  const pvk = await exportKey(keyPair.publicKey)

  const identity = await createIdentity(keyPair.privateKey, id, pvk)

  t.assert(identity.signature)
})

test('Test create signed and verified Identity (verifyIdentity)', async (t) => {
  const keyPair = await generateSigningKeyPair(algorithms.ECDSA_ALGO)
  const id = generateId(32)

  const pvk = await exportKey(keyPair.publicKey)

  const identity = await createIdentity(keyPair.privateKey, id, pvk)

  const verified = await verifyIdentity(identity)

  t.true(verified)
})

/*
test('Test create failed signed Identity with incorrect private key (createIdentity)', async (t) => {
  const keyPair = await generateSigningKeyPair(algorithms.ECDSA_ALGO)
  const id = generateId(32)

  const pvk = await exportKey(keyPair.publicKey)

  const error = await t.throwsAsync(
    async () => {
      await createIdentity(keyPair.publicKey, id, pvk)
    },
    { instanceOf: Error },
  )

  t.is(error.message, 'key does not match that of operation')
})
*/

test('Test create signed and failed verified Identity with incorrect signature (verifyIdentity)', async (t) => {
  const keyPair = await generateSigningKeyPair(algorithms.ECDSA_ALGO)
  const id = generateId(32)

  const pvk = await exportKey(keyPair.publicKey)

  const identity = await createIdentity(keyPair.privateKey, id, pvk)
  identity.signature =
    'ARJT64Tqh3ZsMMtmDcN6YjkG3aQIOaklGG/HEAHLbFUGjU3uYEErju6p6b9z5+xqpLanU9nhuHnTmqjFsCUDENoNAIy5U7EVDXgAolw9hCCtkseXqdBDPpya4s01qaB5PDdh7CmclgXYyc7YIchbRQ3XEMlsM8FnPzOaftbuBlrkGgVr'

  const error = await t.throwsAsync(
    async () => {
      await verifyIdentity(identity)
    },
    { instanceOf: Error },
  )

  t.is(error.message, 'Failed verification.')
})

test('Test generate user keys with RSA 4096 key pairs', async (t) => {
  const id = generateId(32)
  const password = randomString()
  const protectorIterations = 424242

  const serviceKeyContainers = await generateUserKeys4K(
    id,
    password,
    protectorIterations,
  )

  t.assert(
    serviceKeyContainers.keyContainers.storage.psk.keyProtectors[0]
      .encryptedKey &&
      serviceKeyContainers.keyContainers.storage.psk.keyProtectors[0]
        .iterations === protectorIterations,
  )
})

test('Test generate user keys with RSA 8192 key pairs', async (t) => {
  const id = generateId(32)
  const password = randomString()
  const protectorIterations = 424242

  const serviceKeyContainers = await generateUserKeys8K(
    id,
    password,
    protectorIterations,
  )

  t.assert(
    serviceKeyContainers.keyContainers.storage.psk.keyProtectors[0]
      .encryptedKey &&
      serviceKeyContainers.keyContainers.storage.psk.keyProtectors[0]
        .iterations === protectorIterations,
  )
})
