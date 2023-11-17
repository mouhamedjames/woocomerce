import express from "express"
import {produitget,produitupdate,deleteproduit,newproduit,getproduct} from "../controller/produit.js"
const router=express.Router()
router.post("/createproduct",newproduit)
router.get("/getprduit",produitget)
router.get("/filtergetprduit/:id",getproduct)
router.put("/updateproduit/:id",produitupdate)
router.delete("/deleteproduit/:id",deleteproduit)
export default router