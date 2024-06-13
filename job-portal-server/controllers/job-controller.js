const mongoose=require("mongoose");

const jobsCollection = mongoose.connection.collection('postedJobs');

const getAllJobs= async(req,res)=>{
 const jobs= await jobsCollection.find({}).toArray();
 res.send(jobs);
};
const postJobs=async(req,res)=>{
    const body= req.body;
    body.createAt=new Date();

    const results= await jobsCollection.insertOne(body);
    if(results.insertedId){
        return res.status(200).send(results);
    }else{
        return res.status(404).json({msg:"can't insert data please try again"})
    }
}
module.exports={getAllJobs,postJobs}