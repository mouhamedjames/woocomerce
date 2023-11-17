import jwt from 'jsonwebtoken'

export const   verfiy=(req,res,next)=>{
    try{
const token=req.cookies.access_token 
if(!token) return(res.status(400).send("u are not authenticated"))
jwt.verify(token,process.env.password,(err, user)=>{
    if (err) return(res.status(400).json("Token is not valid!"))
req.user=user
next()
})}

catch(err){
next(err)}

}
//when we sign in  in auth  controller   we make  user  with jwt 