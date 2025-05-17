import monogoose from"mongoose"
import dotenv from "dotenv"
import express from "express"
dotenv.config();
const app=express()
const MONGOURI=process.env.MONGoURI
const connectDB=async()=>{
   try {
     monogoose.connect(MONGOURI)
     console.log(`connect DB seccussfully`);
   
    
   } catch (error) {
     console.error('not connect to db')
   }
     
}
export default connectDB