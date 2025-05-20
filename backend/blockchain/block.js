const crypto = require('crypto');  // Ensure crypto is required for hashing

class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return crypto
            .createHash('sha256')
            .update(
                this.index +
                this.previousHash +
                this.timestamp +
                JSON.stringify(this.data)
            )
            .digest('hex');
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2023", "Genesis Block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addCertificate(certificate) {
        const newBlock = new Block(
            this.chain.length,
            Date.now(),
            certificate,
            this.getLatestBlock().hash
        );
        this.chain.push(newBlock);
    }

    // Example for verifyCertificate function in blockchain.js
    verifyCertificate(certificateId) {
        // Assume blockchain.chain is the array of blocks that stores the certificates
        const certificate = this.chain.find(block => block.data.id === certificateId);
  // Replace with your own logic
        return certificate ? certificate.data : null;  // Return certificate data or null if not found
    }

}

module.exports = new Blockchain();  // Exports Blockchain instance
