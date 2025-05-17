

import mongoose from "mongoose";
const Userschema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true}
})
const User= mongoose.model("user",Userschema)
export default User;
