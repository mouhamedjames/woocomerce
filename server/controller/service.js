import Service from "../models/service.js"
export const newservice=async(req,res,next)=>{
    try {const newservice=new Service(req.body)
        await newservice.save()
        res.status(200).send("service  created")
    } catch (err) {
        next(err)
    }
    
    
    
    
    }
    
    
    
    
    
    
    
    
    
    
    export const serviceget=async (req,res,next)=>{
    try {
        const getsservice= await Service.find()
        res.status(200).json(getsservice)
    
    
    
    } catch (err) {
        next(err)
        
    }
    
    
    
    }
    export  const updateservice= async(req,res,next)=>{
        try {
    const updates=await Service.findByIdAndUpdate(req.params.id,{ $set: req.body },
        { new: true })
    if (!updates) return(res.status(400).send("we didnt fount any service."))
    else  return(res.status(200).send("service has been changed."))
    
            
        } catch (error) {
            next(error)
            
        }
    
    
    
    
    }
    export const deleteservice=async(req,res,next)=>{
    try {
        service.findByIdAndDelete(req.params.id)
        res.status(200).send("service est deleted ")
    } catch (err) {
        next
        
    }
    
    
    }
    export const getoneservice= async (req, res,next) => {
        try {
          const servicess = await Service.findById(req.params.id);
          res.status(200).json(servicess);
        } catch (err) {
          next(err);
      }}