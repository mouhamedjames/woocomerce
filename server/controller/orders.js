import orders from "../models/orders.js"
export const createorder =async(req,res,next)=>{
try {
 const order = new orders(req.body) 
 await  order.save() 
  res.send(" created")  
} catch (error) {
    next(error)
}

}
export const getorder=async(req,res,next)=>{
try {
const orderss=  await orders.find()
res.status(200).json(orderss)
    
} catch (error) {
    next(error)
}


}
export const getoneorder= async (req, res,next) => {
    try {
      const oder = await orders.findById(req.params.id);
      res.status(200).json(oder);
    } catch (err) {
      next(err);
  }}
  
  export const updateorder=async(req,res,next)=>{
    try{
 const updateorder = await orders.findByIdAndUpdate( req.params.id,{ $set: req.body },
    { new: true })
if (!updateorder) return(res.status(400).send("we didnt fount any order."))
    
res.status(200).json("fukc")
//here $set to save  only the changed  one 

    }
    catch (err) {
        next(err)
      }
    

}