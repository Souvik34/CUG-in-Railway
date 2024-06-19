const mongoose= require("mongoose");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");

const dealerSchema= new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    employeeid:{
        type: String,
        require: true,
    },
    department:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type:Boolean,
        default: false,
    },
});

dealerSchema.pre('save', async function(next){
    console.log("pre method:",this);
    const user= this;
    if(!user.isModified('password')){
        next();
    }

    try {
        const salt=await bcrypt.genSalt(10);
        const hash_password= await bcrypt.hash(user.password,salt);
        user.password=hash_password;
    } catch (error) {
        next(error);
    }
});

//compare password method
dealerSchema.methods.comparePassword= async function(password){
   return bcrypt.compare(password,this.password);
};
//Json web token
dealerSchema.methods.generateToken= async function (){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
    );
    } catch (error) {
        console.error(error);
    }
};
//define model and collection name
const Dealer=new mongoose.model("Dealer",dealerSchema);

module.exports=Dealer;