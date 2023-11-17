import Produit from "../models/produit.js"

export const newproduit=async(req,res,next)=>{
try {const nexprdouit=new Produit(req.body)
    await nexprdouit.save()
    res.status(200).send("produit created")
} catch (err) {
    next(err)
}




}
export const getproduct= async (req, res,next) => {
  try {
    const product = await Produit.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
}}










export const produitget=async (req,res,next)=>{
try {
    const produit= await Produit.find()
    res.status(200).json(produit)



} catch (err) {
    next(err)
    
}



}
export  const produitupdate= async(req,res,next)=>{
    try {
const updates=await Produit.findByIdAndUpdate(req.params.id,{ $set: req.body },
    { new: true })
if (!updates) return(res.status(400).send("we didnt fount any produit."))

        
    } catch (error) {
        
    }




}
export const deleteproduit=async(req,res,next)=>{
try {
 await Produit.findByIdAndDelete(req.params.id)
    res.status(200).send("produit est deleted ")
} catch (err) {
    next(err)
    
}


}