

const express = require('express');
const router = express.Router();
const { upload, uploadBills, getBills } = require('../controllers/bill-controller');

router.post('/upload', upload.single('file'), uploadBills);
router.get('/bills', getBills);

module.exports = router;