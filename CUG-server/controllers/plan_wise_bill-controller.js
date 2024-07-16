const Add_cug = require("../models/add_cug-model");

// Plan rates
const planRates = {
  A: 75,
  B: 60,
  C: 40,
};

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

const getPlanWiseBillReport = async (req, res) => {
  try {
    const plans = await Add_cug.distinct('plan');
    const planWiseBillReport = [];

    for (const plan of plans) {
      const employees = await Add_cug.find({ plan });
      const departments = await Add_cug.distinct('department', { plan });
      for (const department of departments) {
        const departmentEmployees = employees.filter(employee => employee.department === department);
        const totalAmount = departmentEmployees.reduce((acc, employee) => acc + planRates[employee.plan] * employee.no_of_employees, 0);
        planWiseBillReport.push({
          plan,
          department,
          totalAmount,
        });
      }
    }

    res.json(planWiseBillReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { getPlanWiseBillingReport, getPlanWiseBillReport };