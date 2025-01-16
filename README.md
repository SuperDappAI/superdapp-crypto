![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)

# SuperDapp WebCrypto

SuperDapp WebCrypto is an open-source, cross-platform cryptographic library that implements the Web Cryptography API. It supports symmetric and asymmetric key pair generation, key derivation, key wrapping/unwrapping, encryption, decryption, signing, and verification.

This library serves as the core end-to-end encryption solution for SuperDapp applications and now includes full support for Node.js, making it suitable for both browser and server environments.

---

## Key Features

- **Cross-Platform:** Fully functional in both browser and Node.js environments.
- **Robust Security:** Implements advanced cryptographic primitives for secure encryption and signing.
- **Node.js Support:** Leverages `@peculiar/webcrypto` to provide efficient cryptographic operations in Node.js.
- **Comprehensive API:** Covers symmetric, asymmetric, and key management operations.
- **Modular Design:** Lightweight and designed for flexibility and ease of use.

---

## Documentation

Comprehensive documentation will be available soon. For now, explore the source code and examples to understand its capabilities.

---

## Getting Started

To use this library in your project, follow these steps:

### Installation

Install the package via npm:

```bash
npm install @superdapp/superdapp-webcrypto
```

Or link it locally during development:

```bash
# From the library directory:
(cd ../superdapp-webcrypto; npm link)
# From your importing project:
npm link @superdapp/superdapp-webcrypto
```

### Example Usage

#### Browser

```javascript
import { encryptMessage, decryptMessage } from '@superdapp/superdapp-webcrypto';

const key = 'secure-key';
const message = 'Hello, SuperDapp!';

const encrypted = await encryptMessage(message, key);
console.log('Encrypted:', encrypted);

const decrypted = await decryptMessage(encrypted, key);
console.log('Decrypted:', decrypted);
```

#### Node.js

```javascript
import { encryptMessage, decryptMessage } from '@superdapp/superdapp-webcrypto';
import { Crypto } from '@peculiar/webcrypto';

// Initialize the crypto shim for Node.js
global.crypto = new Crypto();

const key = 'secure-key';
const message = 'Hello, SuperDapp!';

const encrypted = await encryptMessage(message, key);
console.log('Encrypted:', encrypted);

const decrypted = await decryptMessage(encrypted, key);
console.log('Decrypted:', decrypted);
```

---

## Testing

Run the test suite using:

```bash
npm test
```

### Debugging

To debug tests, follow the [AVA Debug Guide](https://github.com/avajs/ava/blob/main/docs/recipes/debugging-with-chrome-devtools.md).

---

## Development

Contributions are welcome! Follow these steps to get started with development:

1. Clone the repository:
   ```bash
   git clone https://github.com/SuperDappAI/superdapp-webcrypto.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests to ensure everything is working:
   ```bash
   npm test
   ```

4. Make your changes and submit a pull request.

---

## License

This library is licensed under the [Apache License 2.0](LICENSE).

---

## Acknowledgments

SuperDapp WebCrypto is inspired by FortKnoxster Crypto Web, with enhanced features and Node.js support to meet the evolving needs of modern web and server applications.

