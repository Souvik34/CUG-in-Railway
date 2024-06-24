const Add_cug = require("../models/add_cug-model");

const getPlanWiseBillingReport = async (req, res) => {
  try {
    const add_cugs = await Add_cug.find({}).exec();

    const planWiseBillingReport = {};

    add_cugs.forEach((add_cug) => {
      const plan = add_cug.plan;
      const department = add_cug.department;

      if (!planWiseBillingReport[plan]) {
        planWiseBillingReport[plan] = {
          departmentCount: 0,
          totalAllocation: 0
        };
      }

      planWiseBillingReport[plan].departmentCount++;
      planWiseBillingReport[plan].totalAllocation += parseInt(add_cug.allocation);
    });

    res.json(planWiseBillingReport);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error generating plan-wise billing report' });
  }
}
module.exports = {getPlanWiseBillingReport};