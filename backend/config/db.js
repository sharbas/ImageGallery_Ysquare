import mongoose from "mongoose";


const connectDB=async()=>{
    try{
      const  conn=await mongoose.connect("mongodb+srv://mohammedsharbas32:9WUdkx6r4J5PkWcc@imagegalleryysquare.i8vdrtq.mongodb.net/?retryWrites=true&w=majority&appName=imageGalleryYsquare",{

          useNewUrlParser:true,
          useUnifiedTopology:true
      })
      console.log(`MongoDB connected:${conn.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`)
    }
}

export default connectDB