// routes/cug_status-router.js
const express = require('express');
const router = express.Router();
const cug_statusController = require('../controllers/cug_status-controller');

router.route('/').post(cug_statusController.create);
router.route('/all_data').get(cug_statusController.getAllData);
router.route('/deactivate').post(cug_statusController.deactivate);
router.route('/deactivate_data').get(cug_statusController.getAllDeactivatedData);

module.exports = router;
