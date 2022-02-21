const { response } = require("express");
const express = require("express");
const path = require("path");
const studentData= require('../models/studentData')
const router = express.Router();
const { verifyToken } = require("../helpers/jwttokens");



router.post('/register',verifyToken, async(req,res)=> {

    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 

    try{
    const record = await studentData.find({ email:req.body.studentProfile.email,courses:req.body.coursename})
    if(record.length>0 )
    {
     res.send( {output:"Already registered for this Course"})
    }
   else
   {
    var item = {
    name:req.body.studentProfile.name,
    email:req.body.studentProfile.email,
    password:req.body.studentProfile.password,
    phone:req.body.studentProfile.phone,
    address:req.body.studentProfile.address,
    district:req.body.studentProfile.district,
    state:req.body.studentProfile.state,
    qualification:req.body.studentProfile.qualification,
    passout:req.body.studentProfile.passout,
    courses:req.body.coursename,
    status:req.body.status
    }

     let student = new studentData(item);
     student.save();
     res.send({ output:"Successfully Enrolled"});
  }
   }
   catch(err)
   {
       res.send({output:err})
   }

});


 router.get("/applications",verifyToken ,(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    try{
    studentData.find().then(function(data){
        res.send(data)
    })
    }
    catch(err)
    {
        res.send(err)
    }


 })

module.exports=router;