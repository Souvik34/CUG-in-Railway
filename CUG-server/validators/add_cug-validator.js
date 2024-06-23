const {z}= require("zod");

const add_cugSchema = z.object({
  cugNo: z
    .number({ required_error: 'CUG No. is required' })
    .min(10, { message: 'Employment No. must be at least 3 characters' })
    .max(10, { message: 'Employment No. must be at most 20 characters' }),
  empNo: z
    .string({ required_error: 'Employment No. is required' })
    .trim()
    .min(3, { message: 'Employment No. must be at least 3 characters' })
    .max(20, { message: 'Employment No. must be at most 20 characters' }),
  firstName: z
    .string({ required_error: 'First name is required' })
    .trim()
    .min(2, { message: 'First name must be at least 2 characters' })
    .max(20, { message: 'First name must be at most 20 characters' }),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .trim()
    .min(2, { message: 'Last name must be at least 2 characters' })
    .max(20, { message: 'Last name must be at most 20 characters' }),
  designation: z
    .string({ required_error: 'Designation is required' })
    .trim()
    .min(2, { message: 'Designation must be at least 2 characters' })
    .max(20, { message: 'Designation must be at most 20 characters' }),
  division: z
    .string({ required_error: 'Division is required' })
    .trim()
    .min(2, { message: 'Division must be at least 2 characters' })
    .max(20, { message: 'Division must be at most 20 characters' }),
  department: z
    .string({ required_error: 'Department is required' })
    .trim()
    .min(2, { message: 'Department must be at least 2 characters' })
    .max(20, { message: 'Department must be at most 20 characters' }),
  billUnit: z
    .number({ required_error: 'Bill Unit is required' })
    .positive('Bill Unit must be a positive number'),
  allocation: z
    .string({ required_error: 'Allocation is required' })
    .trim()
    .min(2, { message: 'Allocation must be at least 2 characters' })
    .max(20, { message: 'Allocation must be at most 20 characters' }),
  operator: z
    .string({ required_error: 'Operator is required' })
    .trim()
    .min(2, { message: 'Operator must be at least 2 characters' })
    .max(20, { message: 'Operator must be at most 20 characters' }),
  plan: z
    .string({ required_error: 'Plan is required' })
    .trim()
    .min(2, { message: 'Plan must be at least 2 characters' })
    .max(20, { message: 'Plan must be at most 20 characters' }),
});
module.exports= add_cugSchema;