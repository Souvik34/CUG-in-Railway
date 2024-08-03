require('dotenv').config();
const express= require("express");
const cors=require("cors");
const app=express();
// const {createServer}=require('node:http');
const authRouter = require("./router/auth-router");
const contactRouter=require("./router/contact-router");
const serviceRouter= require("./router/service-router");
const adminRouter=require("./router/admin-router");
const add_cugRouter = require("./router/add_cug-router");
const cug_activate_deactivate=require("./router/cug_status-router");
const plan_wise_bill=require("./router/plan_wise_bill-router");
const billRouter = require("./router/bill-router")
//mongodb connection
const connectDb= require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

app.use(cors());
app.use(express.json());
//routes
app.use("/api/auth",authRouter);
app.use("/api/form",contactRouter);
app.use("/api/services",serviceRouter);
app.use("/api/add_cug", add_cugRouter);
app.use("/api/admin",adminRouter);
app.use("/api/cug_status",cug_activate_deactivate);
app.use("/api/plan_wise_bill",plan_wise_bill);
app.use('/api/bills', billRouter);
//calling error middleware
app.use(errorMiddleware);


const PORT=process.env.PORT || 4000;


connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running at port :${PORT}`);
    });

});