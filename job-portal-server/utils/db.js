const mongoose= require("mongoose");
const URI=process.env.MONGODB_DATABASE_URI;
const connectDb= async()=>{
    try {
        const client=await mongoose.connect(URI);
        console.log("Connection with database successfully");
    } catch (error) {
         console.log(`Connection with mongodb failed: ${error} `);
        process.exit(0);
    }
};

module.exports=connectDb;