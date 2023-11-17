import express from "express"
import {checkemail,updateuser} from "../controller/resetemail.js"
const router=express.Router()

router.post("/resetpassword",checkemail)
router.post("/changepassword/:id",updateuser)
export default router