// const express = require('express');
// const router = express.Router();
// const { upload, uploadBills } = require('../controllers/bill-controller');

// // router.post('/bills/upload', upload.single('file'), uploadBills);
// router.post('/upload', upload.single('file'), uploadBills);

// module.exports = router;




const express = require('express');
const router = express.Router();
const { upload, uploadBills, getBills } = require('../controllers/bill-controller');

router.post('/upload', upload.single('file'), uploadBills);
router.get('/bills', getBills);

module.exports = router;