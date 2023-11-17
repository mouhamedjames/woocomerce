import User from "../models/user.js"
import  bcrypt from 'bcrypt' 
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()
export const singin = async (req,res,next)=>{
try 

{
    const pass = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, pass);
    
    const user= new User({...req.body,password:hash})
    await user.save()

	
    res.status(200).json(user) 
   

}
catch(err)


{ next(err) }


}


export const singup = async (req,res,next)=>{
    try{
const user = await User.findOne({email:req.body.email})
if(!user)return(res.status(400).send("user not found") )

const checkpassword=await bcrypt.compare(req.body.password,user.password)
if(!checkpassword) return(res.status(400).send("password not work "))

const token = jwt.sign({id:user._id},process.env.password)
//here it make a new sign with id:user.-d and password 
res.cookie("access_token",token,{httpOnly:true}).status(200).json(user)}
    
catch(err)


{next(err) }


}




