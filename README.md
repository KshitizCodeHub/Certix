# 🎓 Certix – Blockchain-Based Certificate Verification System 🔐

![Status](https://img.shields.io/badge/Project-Completed-brightgreen) ![Blockchain](https://img.shields.io/badge/Powered%20By-Blockchain-blue) 

> Say goodbye to fake certificates. Certix is a secure, blockchain-powered system that verifies academic credentials with just a few clicks!

---

## 🧠 What is Certix?

Certix is a **decentralized certificate verification system** that ensures academic records are **tamper-proof**, **instantly verifiable**, and **digitally secure** using the power of **blockchain technology**.

🎯 Designed to help:
- 🔸 Institutions issue secure digital certificates
- 🔸 Employers verify credentials instantly
- 🔸 Students prove achievements with integrity

---

## 🛠️ Tech Stack

| 🧩 Technology        | 💡 Purpose                                |
|---------------------|--------------------------------------------|
| `HTML, CSS`         | User interface design                      |
| `JavaScript`        | Frontend logic + blockchain functionality  |
| `Node.js`           | Backend server & API handling              |
| `Express.js`        | Routing & middleware                       |
| `Crypto-js (SHA256)`| Secure hashing for blockchain blocks       |
| `Docker` (Optional) | Portable deployment and containerization   |

---

## 🚀 Features

- 🔐 **Custom Blockchain** with SHA256 hashing
- 🧱 **Proof-of-Work (PoW)** algorithm to secure each block
- 🌐 **RESTful APIs**:
  - `POST /addCertificate` – Issue a certificate
  - `GET /verifyCertificate/:id` – Verify a certificate
  - `GET /getBlockchain` – Fetch entire chain
- 🖥️ **Frontend Pages**:
  - `submitCertificate.html`
  - `verifyCertificate.html`
- ✅ **Blockchain Validation** with `isChainValid()`
- 📦 Optional **Dockerized Setup** for easy deployment

---

## 🧪 Testing & Results

| 🧪 Test Case                      | 🧾 Input                         | ✅ Expected Output            | 🟢 Status |
|----------------------------------|----------------------------------|-------------------------------|-----------|
| Add Certificate                  | Name: Kshitiz, ID: R123123dfe4   | Block added with hash         | ✅ Passed  |
| Add Certificate                  | Name: Leon, ID: L1I23e4wk        | Block linked and added        | ✅ Passed  |
| Verify Certificate (valid)       | ID: R123123dfe4                  | Certificate Verified          | ✅ Passed  |
| Verify Certificate (invalid)     | ID: InvalidID123                 | Certificate Not Found         | ✅ Passed  |
| Tamper with Block                | Manual data change               | Blockchain marked invalid     | ✅ Passed  |

---

## 🧱 Block Structure (Sample)

```json
{
  "id": "R123123dfe4",
  "name": "Kshitiz Srivastava",
  "course": "Computer Vision Course",
  "year": "2025",
  "timestamp": "2025-04-21T19:15:34.769Z",
  "hash": "b293b3e2b94c7425df04ed...",
  "previousHash": "7b847ea010eac1fa901ee4..."
}
