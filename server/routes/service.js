import express from "express"
import {newservice,serviceget,updateservice,deleteservice,getoneservice} from "../controller/service.js"
const router=express.Router()

router.post("/newservice",newservice)
router.get("/getservice",serviceget)
router.put("/updateservice/:id",updateservice)
router.delete("/deleteservice",deleteservice)
router.get("/oneservice/:id",getoneservice)

export default router

