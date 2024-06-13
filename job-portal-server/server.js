require("dotenv").config();
const express= require("express");
const app=express();
const jobRoute=require("./routes/job-route");
const connectDb=require("./utils/db");
const cors=require("cors");


app.use(express.json());
app.use(cors());
app.use("/api/jobs",jobRoute);
// app.get("/",(req,res)=>{
//     res.status(200).json({msg:"hey this is Job portal home page"});
// })

const PORT= 3000;
const hostname="127.0.0.5";

connectDb().then(()=>{
    app.listen(PORT,hostname,()=>{
        console.log(`server running at http://${hostname}:${PORT}`);
    })

});