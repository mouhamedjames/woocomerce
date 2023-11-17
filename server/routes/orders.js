import express from "express"
import{createorder,getorder,getoneorder,updateorder}from"../controller/orders.js"
const router=express.Router()
router.post("/createorder",createorder)
router.get("/getorder",getorder)
router.get("/getonorer/:id",getoneorder)
router.put("/update/:id",updateorder)

export default router
