import User from "../models/user.js"
import jwt from 'jsonwebtoken'
import nodemailer from "nodemailer"
import  bcrypt from 'bcrypt' 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohamedjamess.12@gmail.com',
      pass: 'qftixnipilzzwzlg',
    },
  });
  

export const checkemail=async(req,res,next,)=>{
try{
    const user = await User.findOne({email:req.body.email})

    if(!user)return(res.status(400).send("user not found") )
    else{
       

    const token = jwt.sign({email:user.email},"james")
    const mailOptions = {
        from: 'mohamedjamess.12@gmail.com',
        to: user.email,
        subject: 'Reset your password',
        text: `Click this link to reset your password: http://localhost:3000/changepassword/${token}`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(400).send('Error sending email');
        }
      
        console.log(`Email sent: ${info.response}`);
        res.send('Email sent');
      });


    }


}

catch(err)
{
next(err)}

}


export const updateuser=async(req,res,next,)=>{

try {
 const parms=req.params.id 
 jwt.verify(parms,"james",(err, email)=>{
    if (err) return(res.status(400).json("Token is not valid!"))
req.email=email
})
const pass = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, pass)

const usesss= await User.findOneAndUpdate({email:req.email.email},{ $set: {"password":hash }},
    { new: true })
    if (!usesss ) return(res.status(400).send("we didnt fount any user."))
    res.status(200).json(usesss);

}
catch(err){
    next(err)



}




}