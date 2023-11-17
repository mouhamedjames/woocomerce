import express from  "express"
import {singin,singup,userupdate,userget,userdelete} from "../controller/admin.js"
import {verfiyadmin} from "../utils/verfiyadmin.js"
const  router = express.Router()
// the apis
router.post("/singin",singin)
router.post("/singup",singup)
router.get("/hi",verfiyadmin)
router.put("/update/:id",userupdate)
router.get("/get",userget)
router.delete("/delete/:id",userdelete)
export default  router