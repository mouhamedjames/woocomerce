import jwt from 'jsonwebtoken'
export  const   verfiyadmin=(req,res,next)=>{
    try{const token=req.cookies.admin_token 
    jwt.verify(token,process.env.password,(err, admin)=>{
        if (err) return(res.status(400).json("Token is not valid!"))
    req.admin=admin
    console.log(req.admin.id)
    })
    
    
    }
    catch(error){

    }}