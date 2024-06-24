const express = require('express');
const router = express.Router();
const controller = require('../controllers/plan_wise_bill-controller');

router.get('/plan-wise-billing-report', controller.getPlanWiseBillingReport);

module.exports = router;