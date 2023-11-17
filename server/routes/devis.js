import express from "express"
import {getdevi,createdevis,updatedevis} from "../controller/devis.js"
const router=express.Router()
router.post("/creatdevis",createdevis)
router.get("/getdevis",getdevi)
router.put("/updatedevis/:id",updatedevis)


export default router