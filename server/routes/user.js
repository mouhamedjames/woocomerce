import express from "express"
import {userget ,userupdate,userdelete} from "../controller/user.js"
import {verfiy} from "../utils/verify.js"
const  router=express.Router()
router.put("/update/:id",verfiy,userupdate)
router.get("/get",userget)
router.delete("/delete/:id",userdelete)

export default router