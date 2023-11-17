import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    iduser: {
      type: String,
      required: true,
     
    },
    reponse: {
      type:Boolean,default: false
        
      },

    description: {
        type: String,
        
      },

      total: {
        type: String,
        required: true,
      },
      idservice: {
        type: String,
        required: true,
      },
    
    
    
  },
  { timestamps: true }
);

export default mongoose.model("Devis", UserSchema);