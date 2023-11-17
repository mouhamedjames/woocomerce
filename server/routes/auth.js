import express from  "express"
import {singin,singup} from "../controller/auth.js"
const  router = express.Router()

router.post("/singin",singin)
router.post("/singup",singup)
export default  router