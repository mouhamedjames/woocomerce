import Devis from "../models/devis.js"



export const getdevi=async(req,res,next)=>{

    try{
 const devi= await Devis.find()
 res.status(200).json(devi)
 




}
catch(err){
next(err)
}
}

export const  createdevis=async(req,res,next) =>{
try{
    const devis= new Devis(req.body)
    await devis.save()
    res.status(200).send("devis created")}

catch(err){
next(err)







}}

export  const updatedevis= async(req,res,next)=>{
    try {
const updates=await Devis.findByIdAndUpdate(req.params.id,{ $set: req.body },
    { new: true })
if (!updates) return(res.status(400).send("we didnt fount any devi."))
else  return(res.status(200).send("devis has been changed."))

        
    } catch (error) {
        next(error)
        
    }




}