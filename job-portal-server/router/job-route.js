const express= require("express");
const jobRouter=express.Router();
const jobController= require("../controllers/job-controller");

jobRouter.route("/").get(jobController.getAllJobs);
jobRouter.route("/addJob").post(jobController.postJobs);
module.exports=jobRouter;