import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import routerauth from "./routes/auth.js"
import routeruser from "./routes/user.js"
import routerprduit from"./routes/produit.js"
import  routerservice from "./routes/service.js"
import routerorders from"./routes/orders.js"
import routercheckemail from"./routes/resetpassword.js"
import routeradmin from"./routes/admin.js"
import routerupload from"./routes/uploadimg.js"
import cookieParser from "cookie-parser"
import routerdevis from "./routes/devis.js"
import  fs from "fs"
import cors from "cors"
import multer from "multer"
import path from "path"
import bodyParser from "body-parser"

const app =express()
app.use(bodyParser())

app.use("/uploads", express.static("uploads"));

app.use(cors()) //request in api axios for working
dotenv.config()
const storage = multer.diskStorage({ // upload image
  destination: function (req, file, cb) {
      cb(null, process.cwd() + '/uploads')
  },
  filename: function (req, file, cb) {
      // generate the public name, removing problematic characters
      const originalName = encodeURIComponent(path.parse(file.originalname).name).replace(/[^a-zA-Z0-9]/g, '')
      const timestamp = Date.now()
      const extension = path.extname(file.originalname).toLowerCase()
      cb(null, originalName + '_' + timestamp + extension)
  }
})
const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1 Mb
  fileFilter: (req, file, callback) => {
      const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg','bmp']
      if (!(acceptableExtensions.some(extension => 
          path.extname(file.originalname).toLowerCase() === `.${extension}`)
      )) {
          return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
      }
      callback(null, true)
  }
})

app.post("/upload",upload.single('file'), (req, res,next) => {//request upload image
  try{
      if (!req.file) {
          return res.status(400).json({ message: 'No file uploaded' });
        }
      
        const imageUrl = `${req.protocol}://${req.hostname}:${8500}/uploads/${req.file.filename}`;
        res.json({ imageUrl });}
  catch(err){
      next(err)
  }


});

const connect = async () => {
    try {
      await mongoose.connect(process.env.mongo)
    } catch (error) {
      throw error
    }
  };
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
  });
  app.use(cookieParser()) //to make cookis work
  app.use(express.json()) // to make json work
  // the api
  app.use("/api/",routerupload)
app.use("/api/service",routerservice)
  app.use("/api/user",routeruser )
  app.use("/api/order",routerorders )
      app.use("/api/auth",routerauth )
      app.use("/api/produit",routerprduit)
      app.use("/api/reset",routercheckemail)
      app.use("/api/admin",routeradmin)
      app.use("/api/devi",routerdevis)
      //if error next will go here
  app.use((err,req,res,next)=>{
    const errorStatus = err.status || 400;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });



  })

app.listen(8500,async()=>{ //to open the sever with protocol  http
     await connect()
    console.log("hello")
})