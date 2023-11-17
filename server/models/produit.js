import mongoose from "mongoose";
const ProduitSchema = new mongoose.Schema(
  {name: {
    type: String,
    required: true,
    unique: true,
  },price: {
    type: String,
    required: true,
  
  },
  detaill: {
    type: String,
    
  },
  category: {
    type: String,
    
  },
  nquntity: {
    type: Number ,default :1
    
  },
  imageurl: {
    type: String,
    
  }},{ timestamps: true })
  export default mongoose.model("Produit", ProduitSchema)