const {z}= require("zod");

const dealerValidationSchema= z.object({

    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message: "Name must be at least of 3 chareaters"})
    .max(20,{message:"Name contains maximum 20"}),

    employeeid: z
    .string({required_error:"employee id required"})
    .trim()
    .min(10,{message: "employee id must be at least of 10 chareaters"})
    .max(200,{message:"employee id contains maximum 200"}),

    department: z
    .string({required_error:"department is required"})
    .trim()
    .min(2,{message: "department must be at least of 2 chareaters"})
    .max(200,{message:"department contains maximum 200"}),

    phone: z
    .string({required_error:"phone is required"})
    .trim()
    .min(10,{message: "phone must be at least of 10 chareaters"})
    .max(20,{message:"Phone contains maximum 20"}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(7,{message: "Password must be at least of 7 chareaters"})
    .max(255,{message:"Password contains maximum 255"}),
});



module.exports=dealerValidationSchema;
