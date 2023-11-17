import mongoose from "mongoose";
const serviceSchema = new mongoose.Schema(
  {userid: {
    type: String,
    required: true,
    
  },categorie: {
    type: String,

    
  }
  ,status: {
    type: String,

    
  }
  ,
  cbox1: {
  type: Object, required: true ,
    
  },
  cbox2: {
    type: Object, required: true ,
      
    },
    cbox3: {
      type: Object, required: true ,
        
      },
 cbox2: {
    type: Object, required: true ,
      
    },
    accpet: {
      type:String,default: "Waiting"
        
      },
      
      

  place:{ type: String,
    required: true,},
 
    date:{ type: String,
      required: true,}
      
   
 
    },{ timestamps: true })
  export default mongoose.model("service", serviceSchema)