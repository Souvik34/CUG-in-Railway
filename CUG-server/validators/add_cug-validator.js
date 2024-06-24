const {z}= require("zod");

const add_cugSchema = z.object({
  
  cugNo: z
  .string({required_error:"cug is required"})
    .trim()
    .min(10,{message: "cug must be at least of 10 chareaters"})
    .max(20,{message:"cug contains maximum 20"}),

  
  empNo: z
  .string({required_error:"emp no is required"})
  .trim()
  .min(11,{message: "emp no must be at least of 11 chareaters"})
  .max(20,{message:"emp no contains maximum 20"}),

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
  .string({ required_error: 'Allocation is required' })
  .trim()
  .min(1, { message: 'Allocation must be at least 1 characters' })
  .max(20, { message: 'Allocation must be at most 20 characters' }),
  allocation: z
    .string({ required_error: 'Allocation is required' })
    .trim()
    .min(1, { message: 'Allocation must be at least 1 characters' })
    .max(20, { message: 'Allocation must be at most 20 characters' }),
  operator: z
    .string({ required_error: 'Operator is required' })
    .trim()
    .min(2, { message: 'Operator must be at least 2 characters' })
    .max(20, { message: 'Operator must be at most 20 characters' }),
  plan: z
    .string({ required_error: 'Plan is required' })
    .trim()
    .min(1, { message: 'Plan must be at least 1 characters' })
    .max(20, { message: 'Plan must be at most 20 characters' }),
});
module.exports= add_cugSchema;