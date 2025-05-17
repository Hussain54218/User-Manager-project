import express from "express";
import connectDB from "./config/db.js";
import route from "./routes/userRoute.js";
import dotenv from "dotenv"
dotenv.config()
import cors from"cors"
const PORT=process.env.PORT||5000;
const app=express();
app.use(cors())
app.use(express.json());
connectDB()
.then(()=>{
       app.listen(PORT,()=>{
        console.log(`server listen on PORT ${PORT}`)
     })
})
app.use("/api/",route)