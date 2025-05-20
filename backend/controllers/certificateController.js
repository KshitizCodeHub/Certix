const blockchain = require('../blockchain/block');  // Import the singleton Blockchain instance

// Example method to add a certificate
exports.addCertificate = (req, res) => {
    const { certificateId, certificateName, issuedTo, issuedOn } = req.body;

    // Example certificate data
    const certificate = {
        id: certificateId,
        name: certificateName,
        issuedTo: issuedTo,
        issuedOn: issuedOn
    };

    // Add certificate to blockchain
    blockchain.addCertificate(certificate);

    res.status(200).json({
        message: 'Certificate added successfully!',
        certificate: certificate
    });
};

// Example method to verify a certificate
exports.verifyCertificate = (req, res) => {
    const { certificateId } = req.params;

    const certificate = blockchain.verifyCertificate(certificateId);

    if (certificate) {
        res.status(200).json({
            message: 'Certificate found',
            certificate: certificate
        });
    } else {
        res.status(404).json({
            message: 'Certificate not found'
        });
    }
};
