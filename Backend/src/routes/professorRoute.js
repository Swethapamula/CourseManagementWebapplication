const express= require('express');
const profData = require('../models/professorData');
const courseData= require('../models/coursesData');
const studentData= require('../models/studentData');
const router = express.Router();

const { verifyToken } = require("../helpers/jwttokens");

//add courses
 router.post('/addcourse',verifyToken, async(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 

   try{
     var item ={
        coursename: req.body.courseData.coursename,
        code: req.body.courseData.code,
        duration:req.body.courseData.duration,
        price:req.body.courseData.price,
        image:req.body.courseData.image,
        details:req.body.courseData.details,
     }
     var courses= new courseData(item);
     var output = await courses.save();
     res.send({message:"Success"})
    }
    catch(err)
    {
        console.log(err);
        res.send({message:err});

    }
      
 })

  router.get('/courses' ,verifyToken, async(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
   try{
     var data = await courseData.find();

      if (data)
      {
           res.send (data);
      }
    }
    catch(err)
    {
        res.send(err);
    }

  })

   router.patch('/approve',verifyToken,async(req,res,next)=>{

    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log(req.body)
    try{
    const data= await studentData.find().where({courses:req.body.courses,status:"Approved" })
    if (data.length<40)
    {
    await studentData.updateOne({ _id: req.body._id }, { $set: { status: "Approved" }});
    res.send({ message:"Success"})
    }
    else{
      res.send({message:"your application cannot be processed"} )
    }

    } 
    catch(err)
    {
       res.send(err)
    }

   })

     router.patch('/reject',verifyToken,async(req,res,next)=>{

      res.header("Acces-Control-Allow-Origin","*");
      res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
      console.log(req.body)
      try{

        await studentData.updateOne({ _id: req.body._id }, { $set: { status: "Rejected" }});
        res.send({ message:"Rejected"})
      
      }
       catch(err)
       {
        res.send(err)
       }
  
     })



 module.exports=router;


