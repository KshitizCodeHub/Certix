const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');

router.post('/submit', certificateController.addCertificate);
router.get('/verify/:certificateId', certificateController.verifyCertificate);

module.exports = router;
