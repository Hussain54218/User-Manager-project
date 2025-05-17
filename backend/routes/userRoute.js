import express from "express";
import { create ,deletUser,getAlldata,getUserById, Updatauser} from "../controller/userController.js";

const route=express.Router();
route.post("/user",create)
route.get('/users',getAlldata)
route.get('/user/:id',getUserById)
route.put("/updata/user/:id",Updatauser)
route.delete("/delet/user/:id",deletUser)
export default route