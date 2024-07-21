const express = require('express');
const router = express.Router();
const controller = require('../controllers/plan_wise_bill-controller');

router.get('/plan-wise-billing-report', (req, res, next) => {
  try {
    controller.getPlanWiseBillingReport(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;