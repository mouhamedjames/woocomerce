import Admin from "../models/admin.js"
import  bcrypt from 'bcrypt' 
import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
dotenv.config()
export const singin = async (req,res,next)=>{
try 

{
    const pass = bcrypt.genSaltSync(10); // crypt the password
        const hash = bcrypt.hashSync(req.body.password, pass);
    
    const user= new Admin({...req.body,password:hash})
    await user.save()

	
    res.status(200).json(user) 
   

}
catch(err)


{ next(err) }


}


export const singup = async (req,res,next)=>{
    try{
const user = await Admin.findOne({username:req.body.username})
if(!user)return(res.status(400).send("user not found") )

const checkpassword=await bcrypt.compare(req.body.password,user.password)
if(!checkpassword) return(res.status(400).send("password not work "))

const token = jwt.sign({id:user._id},process.env.password)
//here it make a new sign with id:user.-d and password 
res.cookie("admin_token",token,{httpOnly:true}).status(200).send('cookies saved')}
    
catch(err)


{
    next(err)

}


}


export const userget=async (req,res,next)=>{

try{
    const getuser= await Admin.find()
res.status(200).json(getuser)

}
catch(err)
{
    next(err)


}


}
export const userupdate=async(req,res,next)=>{
    try{
 const updateuser = await Admin.findByIdAndUpdate( req.params.id,{ $set: req.body },
    { new: true })
if (!updateuser) return(res.status(400).send("we didnt fount any user."))
    
res.status(200).json(updateuser);
//here $set to save  only the changed  one 

    }
    catch (err) {
        next(err)
      }
    

}
export const userdelete=async(req,res,next)=>{

    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err)
      }
    

}
