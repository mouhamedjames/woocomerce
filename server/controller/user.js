import User from "../models/user.js"


export const userget=async (req,res,next)=>{

try{
    const getuser= await User.find()
res.status(200).json(getuser)

}
catch(err)
{
    next(err)


}


}
export const userupdate=async(req,res,next)=>{
    try{
 const updateuser = await User.findByIdAndUpdate( req.params.id,{ $set: req.body },
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
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err)
      }
    

}
